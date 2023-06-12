import { galleryService } from "../services/galleryService.js";

const galleryController = async (req, res, next) => {
  try {
    const filePath = req.file.path;
    const currentDate = new Date();

    const photoData = {
      author: req.body.author,
      description: req.body.description,
      location: req.body.location,
      take_date: req.body.take_date,
      post_date: currentDate,
      file_path: filePath,
    };

    const galleryUpload = await galleryService.uploadPhoto(photoData);

    return res.status(200).send(galleryUpload);
  } catch (error) {
    next(error);
  }
};

export { galleryController };
