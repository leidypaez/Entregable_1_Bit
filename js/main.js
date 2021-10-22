const text1="¡Da rienda suelta a tu imaginación y crea un mundo único de Sims! Explora y personaliza todos los detalles, desde tus Sims a sus hogares y mucho más. Elige el aspecto, la personalidad y la ropa de tus Sims y decide cómo van a vivir día a día. Diseña y construye casas increíbles para cada familia y luego decóralas con tus muebles y elementos decorativos favoritos. Desplázate a distintos barrios donde podrás conocer a otros Sims y enterarte de sus vidas."
const text2="En medio de una confusión, tres criminales muy diferentes barajan sus probabilidades de supervivencia y de éxito: Franklin, un estafador callejero en busca de oportunidades de verdad y dinero serio; Michael, profesional ex convicto, cuyo retiro no es tan prometedor como él hubiera esperado; y Trevor, un maníaco violento motivado por la posibilidad de encontrar drogas baratas y el próximo atraco importante. Agotadas las opciones, esta banda lo arriesgará todo en una serie de atrevidos y peligrosos atracos que marcarán sus vidas."
const text3="El mismo aliento devastador y actitud candente, en alta definición. ¡Spyro regresa en Spyro™ Reignited Trilogy! Reaviva la llama con las versiones remasterizadas de los juegos originales: Spyro™ the Dragon, Spyro™ 2 Ripto's Rage! y Spyro™ Year of the Dragon."

const titulo1="Los SIMS 4"
const titulo2="Grand Theft Auto V"
const titulo3="Spyro - Reignated Trilogy"
let selectedPhoto = null;

function changeText(foto){
    selectedPhoto=foto.id;
    let titulo=document.getElementById('tituloJuego')
    let texto=document.getElementById('text')
    let video=document.getElementById('videoContainer').childNodes[1]
    if (selectedPhoto=="foto1"){
        titulo.innerHTML=titulo1
        texto.innerHTML=text1
        video.src="https://www.youtube.com/embed/z00mK3Pxc8w"
    } 
    else if (selectedPhoto=="foto2"){
        titulo.innerHTML=titulo2
        texto.innerHTML=text2;
        video.src="https://www.youtube.com/embed/hvoD7ehZPcM"
        
    }
    else{
        titulo.innerHTML=titulo3
        texto.innerHTML=text3;
        video.src="https://www.youtube.com/embed/orzNU1R4wb8"
    }
    
}