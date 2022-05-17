const Image = ({ src, alt, className }) => {
    return (
        <div className = {className} data-bs-ride='false' data-bs-interval="1000000000000" >
            <img className ='image' style={{ 'width': '450px', 'height': '450px' }} src={src} alt={alt} />
        </div>
    )
}
export default Image;
