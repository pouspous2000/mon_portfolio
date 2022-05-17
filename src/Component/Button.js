import Image from "./Image";


const Button = ({ titre, id, text, linkGit, linkClock }) => {
    return (

        <>
            <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target={`#${id}`}
                style={{ backgroundColor: '#e1755e', borderRadius: '10px', color: '#f9fbfc', borderColor: '#e1755e', float: "right" }} >
                Voir Plus
            </button>

            <div class="modal fade" id={id} tabindex="-1" role="dialog" aria-labelledby="myModalLabel" style={{ borderRadius: '30px' }}>
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 style={{ fontWeight: '200px', fontFamily: 'serif' }}>{titre}</h1>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div class="modal-body" style={{ fontSize: '16px' }}>
                            {text}
                            <div class="modal-footer">
                                {linkClock ? <div><i class="bi bi-clock-history"></i>Accédez au Clockify <a href={linkClock}>  ici </a></div> : ''}
                                {linkGit ? <div style={{ marginLeft: '10px' }}><i class="bi bi-github"></i>Accédez au repository GitHub <a href={linkGit}>  ici </a></div> : ''}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )

}
export default Button;