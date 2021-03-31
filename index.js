const imagizer=require('imagizer-javascript')

var image_path = "img/img_1.jpg"
var new_file_name = "emeka_123"
var folder_destination = "new_img"

// imagizer.Cartoonize(image_path, new_file_name, folder_destination).then(image_path=>{
//     console.log(image_path)
// }).catch(err=>{ console.log(err) })

// imagizer.BlurrImage(image_path, new_file_name, folder_destination).then(image_path=>{
//     console.log(image_path)
// }).catch(err=>{ console.log(err) })

imagizer.BnW(image_path, new_file_name, folder_destination).then(image_path=>{
    console.log(image_path)
}).catch(err=>{ console.log(err) })