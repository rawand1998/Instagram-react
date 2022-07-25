import React, { useRef, useState } from "react";
import CollectionsIcon from "@mui/icons-material/Collections";
import { useDispatch,useSelector } from "react-redux";
import "./Style.css";
import {db,storage} from '../../firebase/firebase'
import { read } from "fs";
import {selectName,selectPhoto,selectEmail} from '../../features/User/UserSlice'
import { serverTimestamp } from "@firebase/firestore";
import {ref,getDownloadURL,uploadString } from "firebase/storage"
import {selectBoolean,setBool} from '../../features/Bool/boolSlice'
import CloseIcon from '@mui/icons-material/Close';
function Post({show,setShow}) {
  const dispatch = useDispatch();
  const selectedImage = useRef(null);
  const [selectImage, setSelectImage] = useState(null);
  const [input, setInput] = useState(null);
  const [loadings, setLoading] = useState(false)
  const name = useSelector(selectName);
  const photo = useSelector(selectPhoto)
  const email = useSelector(selectEmail)
  const bool = useSelector(selectBoolean)
  const ImageStuff = (e) => {
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onload = function (event) {
      setSelectImage(event.target.result);
      console.log("image loadaed", selectImage);
    };

    reader.readAsDataURL(file);
    // const reader = new FileReader();

    // console.log(e.traget.files[0],"=======")
    // if(e.traget.files[0]){

    //     reader.readAsDataURL(e.traget.files[0])
    //     reader.onload= (Event)=>{
    //         setSelectImage(Event.target.result)
    //     }
    // }else{
    //     console.log("erro")
    // }
  };
  // console.log(selectImage,"=======")
  const submit = async(e)=>{
    e.preventDefault();
    if(input.length >1){
        if(loadings) return;
        setLoading(true)
        const file = await db.collection('insta').add({
            name:name,
            email:email,
            img:photo,
            caption:input,
            timestamp:serverTimestamp()
        })
        const images = ref(storage,`insta/${file.id}/img`)
        await uploadString(images,selectImage,"data_url").then(async ()=>{
            const dawnload = await getDownloadURL(images)
            console.log(file.id,"id")
            await db.collection('insta').doc(file.id).update({
                photo:dawnload,
             
            })
        })
        setInput(" ")
        setSelectImage(null)
        setLoading(false)

    }

  }

  return (
    <div>
    {bool ? (
        <div className="post-container" user={bool}>
        <div className="close" onClick={()=>dispatch(setBool({
        bool:false
    }))
  
    }>
            <CloseIcon />
        </div>
      <div className="post-warrp">
        <div className="topSection">
          {selectImage ? (
            <div className="imageConatiner">
              <img src={selectImage} alt="post" />
            </div>
          ) : (
            <CollectionsIcon onClick={() => selectedImage.current.click()} />
          )}
          <input
            type="file"
            className=""
            hidden
            ref={selectedImage}
            onChange={ImageStuff}
          />
        </div>
        <div className="bottomSection">
          <div className="inputContainer">
            <input
              disabled={!selectImage}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="caption"
            />
          </div>
          <button disabled={loadings} onClick={submit}>post</button>
        </div>
      </div>
    </div>
    ):(
        <div></div>
    )}

</div>
  );

}

export default Post;
