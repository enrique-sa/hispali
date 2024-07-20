import Image from 'next/image'
import Link from 'next/link';

interface Treatment {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const treatments: Treatment[] = [
  {
    title: "Células Madres",
    description: "Son células que tienen la capacidad de regenerar cualquier tejido dañado, mejorando su funcionamiento sin importar la edad.",
    imageUrl: "https://drbaja.s3.us-east-2.amazonaws.com/img/background/cells.jpg",
    link: "/"
  },
  {
    title: "Power Serum",
    description: "Es un elixir intravenoso multivitamínico y quelante al mismo tiempo, con dosis y procesos estandarizados.",
    imageUrl: "https://drbaja.s3.us-east-2.amazonaws.com/img/background/power-serum.jpg",
    link: "/"
  },
  {
    title: "Implante de Placenta en Gel",
    description: "Permiten una alta estimulación metabólica en los tejidos al liberar exosomas, los cuales tienen la capacidad de modular la actividad celular.",
    imageUrl: "https://drbaja.s3.us-east-2.amazonaws.com/img/background/placenta-gel-implant.jpg",
    link: "/"
  },
  {
    title: "Células NK",
    description: "Son un tipo de linfocito del sistema inmunológico que juega un papel crucial en la defensa del cuerpo contra las células cancerosas y las células infectadas por virus.",
    imageUrl: "https://drbaja.s3.us-east-2.amazonaws.com/img/background/nk-cells.jpg",
    link: "/"
  }
];

export default function Home() {
  return (
    <>
      <header className="relative pt-[100px]">
        <div className='container h-[400px] xl:h-[600px] mx-auto'>
          <div className="flex items-center justify-center h-full relative z-10">
            <div className="text-white text-center">
              <h1 className="mb-0 text-3xl sm:text-4xl font-semibold">
                Medicina Regenerativa
              </h1>
            </div>
          </div>
        </div>
        
        <div className="absolute inset-0 after:absolute after:inset-0 after:bg-[#212529] after:opacity-70">
          <Image
            src="https://drbaja.s3.us-east-2.amazonaws.com/img/background/regenerative-medicine.jpg"
            alt="regenerative-medicine"
            fill
            quality={100}
            sizes="(max-width: 450px) 100vw, (max-width: 1280px) 50vw, 100vw"
            style={{
              objectPosition: 'center',
              objectFit: 'cover',
            }}
            priority
          />
        </div>
      </header>

      <section className="bg-[#f8f9fa]">
        <div className="max-w-5xl mx-auto px-4 py-[100px]">
          <h2 className="text-2xl font-semibold mb-5">
            Explora nuestro catálogo de tratamientos:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {treatments.map((treatment, index) => (
              <div key={index} className="mb-5">
                <Image
                  src={treatment.imageUrl}
                  alt={treatment.title}
                  className="img-fluid rounded-lg"
                  width={500}
                  height={300}
                  priority
                />
                <div className="my-4">
                  <h3 className="text-xl font-semibold text-[#163495] mb-3">
                    {treatment.title}
                  </h3>
                  <p className="font-text-18 text-dark mb-3 line-clamp-2 md:line-clamp-3">
                    {treatment.description}
                  </p>
                  <Link 
                    href={treatment.link}
                    className="inline-block bg-[#343a40] hover:bg-[#23272b] rounded py-2 px-4 text-white"
                    role="button"
                    aria-pressed="true"
                  >
                    Leer más
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
