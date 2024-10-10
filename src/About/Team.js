export default function Team({ members }) {
    return (
        <div className='team-cont padding-box'>
            {members.map((person => {
                const {id, image, name, position} = person;
                return (
                    <div className="team-member" key={ id }>
                        <img className="team-image" src={ image } alt='team' width='50px'/>
                        <p><b>{ name }</b></p>
                        <p>{ position }</p>
                    </div>
                )
            }))}
        </div>
    )
}