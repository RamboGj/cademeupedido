import Image from 'next/image'

import logoHeader from '../assets/logo-header.svg'
import notebook from '../assets/notebook.svg'
import integrationsDesktop from '../assets/integrations-desktop.svg'
import smartphone from '../assets/smartphone.svg'
import productDesktop from '../assets/product-desktop.svg'
import logoFooter from '../assets/logo-footer.png'

export default function Home() {
  return (
    <>
      <header className="w-screen bg-gradient-to-r from-yellow300 to-yellow500 pt-2">
        <div className="max-w-[411px] lg:max-w-[1280px] mx-auto flex px-8 justify-between items-center">
          <Image src={logoHeader} alt="Logo da CadeMeuPedido" />
          <ul className="text-lg text-yellow900 flex gap-24 font-semibold">
            <li>
              <a href="">Features</a>
            </li>
            <li>
              <a href="">Integrações</a>
            </li>
            <li>
              <a href="">Agendar</a>
            </li>
          </ul>
          <button className="border-2 border-white text-white font-bold px-12 py-4 hover:bg-white hover:text-yellow900 transition duration-500">
            FALE CONOSCO
          </button>
        </div>
      </header>
      <main className="w-screen text-yellow900">
        <section className="w-screen bg-gradient-to-r from-yellow300 to-yellow500 pt-2">
          <div className="max-w-[411px] lg:max-w-[1280px] mx-auto px-8 flex justify-between items-start pb-8 pt-24">
            <div className="flex flex-col max-w-[440px]">
              <h1 className="text-xl lg:text-[32px] leading-tight font-bold">
                FAÇA DO PÓS COMPRA A MELHOR PARTE DA EXPERIÊNCIA DO USUÁRIO
              </h1>
              <p className="font-hubballi text-lg lg:text-[22px] mt-2">
                Encante seus clientes com rastreamento automatizado de remessas
                para aumentar a fidelidade à marca e gerar mais vendas.
              </p>
              <div className="mt-12 w-full flex">
                <input
                  placeholder="Seu e-mail..."
                  type="text"
                  className="flex-1 bg-white py-3 px-4 focus:outline-none border-2 border-transparent focus:border-yellow900"
                />
                <button className="w-[124px] font-bold text-yellow500 bg-yellow900 hover:bg-yellow900/80 transition duration-500">
                  AGENDAR
                </button>
              </div>
            </div>
            <Image
              src={notebook}
              alt="Foto de um notebook e ao lado um smartphone"
            />
          </div>
        </section>
        <section className="w-screen mt-24">
          <div className="max-w-[411px] lg:max-w-[1280px] mx-auto p-8 flex flex-col gap-20">
            <h1 className="font-bold text-[28px] lg:text-[42px] max-w-[411px] lg:max-w-[800px] text-center mx-auto leading-none uppercase">
              Integramos seu Ecommerce com o{' '}
              <span className="text-yellow500">ERP</span> e as{' '}
              <span className="text-yellow500">Transportadoras</span>
            </h1>
            <Image src={integrationsDesktop} alt="" />
          </div>
          <div className="max-w-[411px] lg:max-w-[1280px] flex justify-between items-center mt-32 mx-auto px-8">
            <div className="font-bold bg-yellow500 w-[540px] h-[240px] text-[72px] flex justify-center items-center">
              2.6x
            </div>
            <h1 className="font-bold text-[28px] lg:text-[48px] max-w-[411px] lg:max-w-[565px] leading-none">
              Os clientes visitam a página de rastreio em média 2.6x por pedido.
            </h1>
          </div>
        </section>
        <section className="w-screen mt-24 bg-gradient-to-r from-blue300 to-blue500 py-16">
          <div className="max-w-[411px] lg:max-w-[1280px] flex justify-between items-center mx-auto px-8">
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-[28px] lg:text-[42px] max-w-[472px] leading-tight">
                ELIMINE A ANSIEDADE DE RASTREIO
              </h1>
              <p className="font-hubballi text-lg lg:text-[22px] max-w-[380px]">
                Permita que os compradores rastreiem cada passo da entrega em um
                único clique.
              </p>
            </div>
            <Image src={smartphone} alt="" />
          </div>
        </section>
        <section className="w-screen mt-24 ">
          <div className="max-w-[411px] lg:max-w-[1280px] flex justify-between items-center mx-auto px-8">
            <Image src={productDesktop} alt="" />
            <div className="max-w-[380px] flex flex-col gap-2">
              <h1 className="font-bold text-[28px] lg:text-[42px] leading-tight">
                MANTENHA SEUS CLIENTES ENGAJADOS
              </h1>
              <p className="font-hubballi text-lg lg:text-[22px]">
                83% dos compradores esperam por uma comunicação regular e
                eficiente sobre suas encomendas. Mantenha-os informados.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-screen bg-gradient-to-r from-yellow300 to-yellow500 py-4 mt-24">
        <div className="max-w-[411px] lg:max-w-[1280px] px-8 mx-auto flex items-center justify-between">
          <Image src={logoFooter} alt="Logo da CadeMeuPedido" />
          <div className="flex">
            <input
              placeholder="Seu e-mail..."
              type="text"
              className="w-[312px] bg-white py-3 px-4 focus:outline-none border-2 border-transparent focus:border-yellow900"
            />
            <button className="w-[124px] font-bold text-yellow600 bg-yellow900 hover:bg-yellow900/80 transition duration-500">
              AGENDAR
            </button>
          </div>
        </div>
      </footer>
    </>
  )
}
