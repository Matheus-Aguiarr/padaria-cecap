import './Address.css';
const Address = () => {
    return (
        <section id="address" className='address'>
            <h1 className='text-center font-bold text-3xl overflow-y-hidden'>
                Nosso <span className='text-[#126091]'>Endereço</span>
            </h1>
            <div className="maps flex items-center justify-center">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.00639602518!2d-46.49698582573333!3d-23.460233778869455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce8a8746ba6ffb%3A0x57283bf873c3a369!2sPanificadora%20Parque%20Cecap!5e0!3m2!1spt-BR!2sbr!4v1741527954631!5m2!1spt-BR!2sbr"  
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
            className='w-[300px] h-[300px] border-0 rounded-lg'
            ></iframe>
            </div>
        </section>
    )
}

export default Address;