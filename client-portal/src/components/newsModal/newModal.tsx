import { TimerIcon } from 'assets/icons'
import React, { useState } from 'react'
import "./newsModal.scss"
import { Button, Modal, Spin } from 'antd'
import { useAppSelector } from '@store/hooks';
import { useNewsArticle } from 'api/news/useNewsArticle';
import { useCookies } from 'react-cookie';
import { INews } from '@interfaces';
export interface NewsModalProps {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    closable: boolean
    article?: INews 
    label: string
}

const NewsModal: React.FC<NewsModalProps> = ({
    open,
    setOpen,
    closable,
    article,
    label
}) => {
    const {themeSelect } = useAppSelector(state => state.themeBg)
    const [cookies] = useCookies(["access_token"])
    const [readMore, setReadMore] = useState(false)
    const [fullArticle, setFullArticle] = useState<INews | null>()
    const {mutate, isPending} = useNewsArticle({
        onSuccess: (data) => {

            setFullArticle(data)
             setReadMore(true)
        } ,
        onError: () => {}

    })

    const handleOpenArticle = (articleId?: string) => {
        if(!fullArticle){
            mutate({
                token: cookies.access_token,
                articleId 
            })
        }
         
            setReadMore(prev => !prev);
       
    }
  return (
    <Modal 
    className={themeSelect}
    open={open}
    maskClosable={true}  
    width={600}
    closable={closable}
    afterClose={() => setFullArticle(null)}
    centered

    footer={
        <div style={{ textAlign: 'center', marginBottom: "20px" }}>
          <Button 
            key="cancel" 
            onClick={() => setOpen(false)} 
            style={{ 
              backgroundColor: '#16171A',
              color: 'white',
              padding: "7px 32px",
              height: "max-content",
              marginRight:"7px"

            }}
          >
            Remind later
          </Button>
          <Button 
            key="ok" 
            type="primary" 
            onClick={() => handleOpenArticle(article?.article_id)} 
            style={{ 
                backgroundColor: "#0094ff" ,
                color: 'yourOkButtonTextColor' ,
                padding: "7px 32px",
                height: "max-content"


            }}
          >
            {isPending ? <Spin/> : (readMore ? "Read Less": "Read More")}
            
           
          </Button>
        </div>
      }
      >

    <div className={`${themeSelect} newsModal  py-10`}>
        <h2 className='font-bold text-2xl text-center my-7 capitalize'>{label} News
           
        </h2>

        <h3 className='max-w-md m-auto text-lg text-center'> {article?.title?.substring(0, 65)}  

        </h3>
        <h3 className='text-center text-lg font-semibold my-3'>01.23.2024</h3>
        {readMore ?   (<>
        <div className='w-full max-h-96 overflow-y-auto px-8'>{fullArticle?.description}

        </div>
        
        </>) : (<>
            <p className='max-w-xl m-auto text-center text-base'>
            {article?.description?.substring(0, 190)}...
        </p>

        <p className='text-center m-auto w-max flex gap-3 my-5 text-[#0094ff]'>
            <TimerIcon/> <span> 15 min Read</span>
        </p>
        
        </>)}
      
      
    </div>

    </Modal>

  )
}

export default NewsModal