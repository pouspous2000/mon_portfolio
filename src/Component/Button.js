import Image from "./Image";

const Button = ({titre, id, text, src1, src2, src3, alt1, alt2, alt3, linkGit, linkClock}) => {
    console.log("je suis l'id", id)
    return (

    <>
        <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target={`#${id}`}  
        style = {{ backgroundColor:'#e1755e', borderRadius:'10px', color:'#f9fbfc', borderColor:'#e1755e', float:"right"}} >
            Voir Plus
        </button>

        <div class="modal fade" id={id} tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <span>{titre}</span>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    
                    <div class="modal-body">
                        
                        {text}
                        {linkGit?<span>Accédez au repository GitHub <a href = {linkGit}>  ici </a></span> :''}
                        {linkClock?<span>Accédez au Clockify <a href = {linkClock}>  ici </a></span> :''}

                    </div>
                </div>
            </div>
        </div>

    </>

    )

}
export default Button;