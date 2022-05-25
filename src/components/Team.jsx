import React from 'react'
import Title from './Title'

// Images
import eksenTeam from '../img/home/eksen_team.png'


const Team = () => {
  return (
    <section>
        <div className="container-fluid">
            <div className="row align-items-center py-5">
                <div className="col-lg-4 paragraph-margin">
                    <Title 
                    title='EKSEN , dünya
                    çapında faaliyet
                    gösteren lojistik
                    endüstrisinde
                    özel bir konuma
                    sahiptir.'
                    subtitle='biz bir aileyiz '
                    paragraph='Şirket, profesyonel kurumsal yapılarını sürdürürken, çalışanlarına da herkesin takdir edildiği, insan dokunuşu ile hoşgörülü bir çalışma ortamı sunmaktadır.
                    EKSEN LOJİSTİK’deki kariyer olanakları hakkında daha fazlasını okuyun.'
                    />
                    <a href="#!" className="btn btn-main mt-3">kariyer</a>
                </div>
                <div className="col-lg-7 text-end">
                    <img src={eksenTeam} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Team