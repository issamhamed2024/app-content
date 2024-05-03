const User = require("../models/User")
// Importer le modèle ou la logique de gestion des données pour les demandes
const Order = require("../models/Order")

const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const path = require("path")
const fs = require("fs")
const AWS = require("aws-sdk")
const Data = require("../models/Data")

exports.saveData = async (req, res) => {
  try {
    const { name, gender, nationality, city, age, price, mobile, status, notes, actions } = req.body;
    const image = req.file;
    var savedImage= null;
    if(image) 
      savedImage = await uploadPhoto(image);
    const newData = new Data({ image: (image ? savedImage: ""), name, gender, nationality, city, age, price, mobile, status, notes, actions})
    let status_ = 1;
    let message = "User data saved successfully!";
    try {
      await newData.save();
    } catch (err) {
      status_ = 0;
      message = err;
    }
    res.json({status_, message});
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error: error.message });
  }
};

exports.updateData = async (req, res) => {
  try {
    const { id, name, gender, nationality, city, age, price, mobile, status, notes, actions } = req.body;
    const image = req.file;
    const item = await Data.findById(id);
    var savedImage = item.image;
    if(image)
      savedImage = await uploadPhoto(image);
    const newData = { image: savedImage, name, gender, nationality, city, age, price, mobile, status, notes, actions };

    let status_ = 1;
    let message = "User data saved successfully!";
    try {
      await Data.findByIdAndUpdate(id, newData, { new: true });
    } catch (err) {
      status_ = 0;
      message = err;
    }
    res.json({status_, message});
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error: error.message });
  }
};

exports.setDataAttachements = async (req, res) => {
  try {
    const { id, name } = req.body;
    const files = req.files;
    const filenames = [];
    for (const file of files) {
      let savedImage = await uploadPhoto(file);
      savedImage = savedImage + ";" + name;
      filenames.push(savedImage);
    }
    const item = await Data.findById(id);
    const updatedAttachments = [...(item.attachments || '').split(','), ...filenames].join(',');
    try {
      const updatedData = await Data.findByIdAndUpdate(id, { $set: { attachments: updatedAttachments } }, { new: true });
      if (!updatedData) {
        return res.status(404).json({ status_: 0, message: "Data not found" });
      }
      return res.json({ status_: 1, message: "Data status updated successfully", data: updatedAttachments });
    } catch (error) {
      return res.status(500).json({ status_: 0, message: "An error occurred", error: error.message });
    }
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error: error.message });
  }
};

exports.getData = async (req, res) =>{
  let status_ = 1;
  let message = "All data received successfully!";
  try {
    const allData = await Data.find();
    res.json({ status_: 1, datas: allData });
  } catch (error) {
    res.status(500).json({ status_: 0, message: "An error occurred", error: error.message, datas:[] });
  }
}

exports.setDataStatus = async (req, res) => {
  try {
    const { id, status } = req.body;
    const updatedData = await Data.findByIdAndUpdate(id, { status: status }, { new: true });
    if (!updatedData) {
      return res.status(404).json({ status_: 0, message: "Data not found" });
    }
    return res.json({ status_: 1, message: "Data status updated successfully", data: updatedData });
  } catch (error) {
    return res.status(500).json({ status_: 0, message: "An error occurred", error: error.message });
  }
}

exports.setDataNotes = async (req, res) => {
  try {
    const { id, notes } = req.body;
    const updatedData = await Data.findByIdAndUpdate(id, { notes: notes }, { new: true });
    if (!updatedData) {
      return res.status(404).json({ status_: 0, message: "Data not found" });
    }
    return res.json({ status_: 1, message: "Data status updated successfully", data: updatedData });
  } catch (error) {
    return res.status(500).json({ status_: 0, message: "An error occurred", error: error.message });
  }
}

exports.setDataActions = async (req, res) => {
  try {
    const { id, actions } = req.body;
    const updatedData = await Data.findByIdAndUpdate(id, { $set: { actions: actions } }, { new: true });
    if (!updatedData) {
      return res.status(404).json({ status_: 0, message: "Data not found" });
    }
    return res.json({ status_: 1, message: "Data status updated successfully", data: updatedData });
  } catch (error) {
    return res.status(500).json({ status_: 0, message: "An error occurred", error: error.message });
  }
}

exports.deleteData = async (req, res) => {
  try {
    const { id } = req.body;
    const deletedUser = await Data.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ status_: 0, message: "Data not found" });
    }
    return res.json({ status_: 1, message: "Data status updated successfully", data: deletedUser });
  } catch (error) {
    return res.status(500).json({ status_: 0, message: "An error occurred", error: error.message });
  }
}

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body
    const user = await User.findOne({ username })

    if (!user) {
      return res
          .status(401)
          .json({ message: "Authentication failed. User not found." })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) {
      return res
          .status(401)
          .json({ message: "Authentication failed. Wrong password." })
    }

    const token = jwt.sign({ userId: user._id }, "secret_key", {
      expiresIn: "1h",
    })

    res.status(200).json({ token })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const uploadPhoto = async (file) => {
  AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION, // Remplacez par la région où se trouve votre compartiment S3
  })
  try {
    // Générer un nom de fichier unique
    const timestamp = Date.now() // Timestamp actuel
    const randomString = Math.random().toString(36).substring(2, 15) // Chaîne aléatoire
    const fileType = file.mimetype.split("/")[1]
    const fileName = `file_${timestamp}_${randomString}.${fileType}`
    // Utiliser le nom de fichier généré dans les paramètres S3
    const s3 = new AWS.S3()
    const s3Params = {
      Bucket: "maabada",
      Key: `users_files/${fileName}`, // Utilisation du nom de fichier généré
      Body: file.buffer, // Les données binaires du fichier à téléverser
      ContentType: fileType,
      ACL: "public-read",
    }
    // Téléverser le fichier vers S3
    await s3.upload(s3Params).promise()
    // Construisez l'URL de l'image à partir de l'URI S3
    const imageUrl = `https://maabada.s3.eu-north-1.amazonaws.com/users_files/${fileName}`
    return imageUrl;
  } catch (error) {
    return  error.message
  }
}

// Configurez l'accès à S3 avec vos clés d'accès

// Méthode pour récupérer toutes les demandes
exports.getOrder = async (req, res) => {
  try {
    // Récupérer toutes les demandes depuis la source de données
    const orders = await Order.find().sort({ creationDate: 1 })
    // Renvoyer les demandes en tant que réponse
    res.json(orders)
  } catch (error) {
    // En cas d'erreur, renvoyer une réponse avec un code d'erreur
    res.status(500).json({
      message:
        "Une erreur s'est produite lors de la récupération des demandes.",
    })
  }
}
exports.updateSendDate = async (req, res) => {
  try {
    const idOrder = req.params.idOrder
    await Order.findByIdAndUpdate(idOrder, { sendDate: new Date() })
    res.status(200).json({ success: true })
  } catch (error) {
    // En cas d'erreur, renvoyer une réponse avec un code d'erreur
    res.status(500).json({
      message: "Une erreur s'est produite lors de la mise a jour.",
    })
  }
}

module.exports.getUserPictures = async (req, res) => {
  const pictureId = req.params.pictureId
  try {
    if (pictureId) {
      const order = await Order.findById(pictureId)
      const filePath = path.resolve(__dirname, "..", "users_files")
      const file = filePath + "/" + order?.urlPicture
      const exists = require("fs").existsSync(file)
      console.log("file", file, exists)
      if (exists) {
        const ext = path.extname(file)
        let contentType = ""
        switch (ext) {
          case ".jpg":
          case ".jpeg":
            contentType = "image/jpeg"
            break
          case ".png":
            contentType = "image/png"
            break
          case ".gif":
            contentType = "image/gif"
            break
          default:
            contentType = "application/octet-stream"
        }

        const imageContent = require("fs").readFileSync(file)
        // Envoyer le contenu de l'image en réponse avec le type de contenu approprié
        res.writeHead(200, { "Content-Type": contentType })
        res.end(imageContent, "binary")
      } else {
        res.status(404).send("Picture not found")
      }
    } else {
      res.status(404).send("Order not found")
    }
  } catch (error) {
    console.error("Erreur lors de la récupération du fichier :", error)
    res.status(500).send("Erreur serveur", error?.message)
  }
}
