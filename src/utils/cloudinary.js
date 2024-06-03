import { v2 as cloudinary} from "cloudinary";
import fs from "fs"


          
cloudinary.config({ 
  cloud_name:  process.env.CLOUDINARY_CLOUD_NAME,
  api_key:  process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async(localFilePath)=>{
    try {
        if (!localFilePath) return NULL
            //upload file on cloudinary
           const response= await cloudinary.uploader.upload(localFilePath,{
                resource_type: "auto"
            })
        // file has been uploaded successfully
<<<<<<< HEAD
        fs.unlinkSync(localFilePath)
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath)

        return null;
=======
        console.log("file is uploaded on cloudinary",response.url);
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath)
>>>>>>> acd7c916e1bd98c3bb010c990d1f7cc761f910ef
        //remove the locally saved file as the upload operation got failed
    }
}



cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
  { public_id: "olympic_flag" }, 
<<<<<<< HEAD
  function(error, result) {console.log(result); });

export {uploadOnCloudinary}
=======
  function(error, result) {console.log(result); });
>>>>>>> acd7c916e1bd98c3bb010c990d1f7cc761f910ef
