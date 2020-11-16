// const express = require('express');
// const router = express.Router();
// const dB = require('../data/dbConfig');
// const Images = require('./image-model');



// router.get('/', (req, res) => {
 
//  Users.find()
//     .then(images => {
//         res.status(200).json(images)
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(500).json({ 
//             errorMessage: "Error retrieving the list of images", 
//             message: err.message
//         })
//     })
// })

// router.put('/:id', (req, res) => {
//       const id = req.params.id;
//       const imageData = req.body; 
//       console.log(id);
//       console.log(imageData);
//       Images.findById(id)
//       .then(image => {
//           console.log(image.id);
//           if(image.id == id) {
//               Images.update(id, userData)
//               .then(updatedImage => {
//                   res.status(201).json({message: 'Image updated successfully!!!'})
//               })
//               .catch(err => {
//                 console.log(err)
//                 res.status(404).json({ 
//                     message: 'Image not found',
//                     errorMessage: err.message
//             })
//               })
//           }
//       })
//       .catch(err => {
//           res.status(500).json({
//                message: "User could not be updated",
//                errorMessage: err.message
//             })
//       })
//  })



// module.exports = router;