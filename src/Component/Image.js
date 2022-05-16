const Image = ({ src, alt, className }) => {
    return (
        <div className = {className} data-bs-ride='false' >
            <img className ='image' style={{ 'width': '300px', 'height': '300px' }} src={src} alt={alt} />
        </div>
    )
}
export default Image;
