import style from './../styles/Loading.module.scss'

const Loading = () => {
    return (
        <div className={style.loadingContainer}>
            <img src='./images/img_spinner.gif' alt="로딩 이미지" />
        </div>
    );
}

export default Loading;