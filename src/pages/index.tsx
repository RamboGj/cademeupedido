import Image from 'next/image'

import logoHeader from '../assets/logo-header.svg'
import notebook from '../assets/notebook.svg'
import smartphoneMobile from '../assets/smartphone-mobile.svg'
import integrationsDesktop from '../assets/integrations-desktop.svg'
import integrationsMobile from '../assets/integrations-mobile.png'
import smartphone from '../assets/smartphone.svg'
import productDesktop from '../assets/product-desktop.svg'
import productMobile from '../assets/product-mobile.svg'
import logoFooter from '../assets/logo-footer.png'

import { List, X } from 'phosphor-react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import { useState } from 'react'

export default function Home() {
  const [dropdownMenuIsOpen, setDropdownMenuIsOpen] = useState<boolean>(false)

  return (
    <>
      <header className="w-screen bg-gradient-to-r from-yellow300 to-yellow500 pt-2 text-yellow900">
        <div className="max-w-[411px] lg:max-w-[1280px] mx-auto flex px-8 justify-between items-center">
          <Image src={logoHeader} alt="Logo da CadeMeuPedido" />
          {/* Mobile Header */}
          <DropdownMenu.Root
            onOpenChange={(value) => setDropdownMenuIsOpen(value)}
          >
            <DropdownMenu.Trigger>
              {!dropdownMenuIsOpen ? (
                <List className="flex lg:hidden" size={32} weight="bold" />
              ) : (
                <X className="flex lg:hidden" size={32} weight="bold" />
              )}
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <DropdownMenu.Content className="w-screen bg-white px-8 pt-24 pb-16 shadow-lg mt-4">
                <ul className="flex flex-col text-sm gap-10 font-semibold">
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
                <button className="border-2 bg-yellow500 text-yellow900 font-bold px-8 py-2 hover:bg-yellow500 transition duration-500 mt-16">
                  FALE CONOSCO
                </button>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
          {/* Desktop Header */}
          <ul className="hidden lg:flex text-lg text-yellow900 gap-24 font-semibold">
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
          <button className="hidden lg:flex border-2 border-white text-white font-bold px-12 py-4 hover:bg-white hover:text-yellow900 transition duration-500">
            FALE CONOSCO
          </button>
        </div>
      </header>
      <main className="w-screen text-yellow900">
        <section className="w-screen bg-gradient-to-r from-yellow300 to-yellow500 pt-2">
          <div className="max-w-[411px] lg:max-w-[1280px] mx-auto px-8 flex-col lg:flex-row flex justify-between items-start pb-8 pt-24">
            <div className="flex flex-col max-w-[440px]">
              <h1 className="text-xl lg:text-[32px] leading-tight font-bold">
                FAÇA DO PÓS COMPRA A MELHOR PARTE DA EXPERIÊNCIA DO USUÁRIO
              </h1>
              <p className="font-hubballi text-lg lg:text-[22px] mt-2">
                Encante seus clientes com rastreamento automatizado de remessas
                para aumentar a fidelidade à marca e gerar mais vendas.
              </p>
              <div className="mt-12 w-full flex flex-col lg:flex-row">
                <input
                  placeholder="Seu e-mail..."
                  type="text"
                  className="flex-1 bg-white py-3 px-4 focus:outline-none border-2 border-transparent focus:border-yellow900"
                />
                <button className="w-[350px] lg:w-[124px] py-3 px-4 lg:py-0 lg:px-0 font-bold text-yellow500 bg-yellow900 hover:bg-yellow900/80 transition duration-500">
                  AGENDAR
                </button>
              </div>
            </div>
            <div className="hidden lg:flex">
              <Image
                src={notebook}
                alt="Foto de um notebook e ao lado um smartphone"
              />
            </div>
            <div className="flex lg:hidden mx-auto">
              <Image src={smartphoneMobile} alt="Foto de um smartphone" />
            </div>
          </div>
        </section>
        <section className="w-screen mt-24">
          <div className="max-w-[411px] lg:max-w-[1280px] mx-auto p-8 flex flex-col gap-20">
            <h1 className="font-bold text-[28px] lg:text-[42px] max-w-[411px] lg:max-w-[800px] text-center mx-auto leading-none uppercase">
              Integramos seu Ecommerce com o{' '}
              <span className="text-yellow500">ERP</span> e as{' '}
              <span className="text-yellow500">Transportadoras</span>
            </h1>
            <div className="hidden lg:flex mx-auto">
              <Image src={integrationsDesktop} alt="" />
            </div>
            <div className="flex lg:hidden ml-10 lg:ml-0">
              <Image src={integrationsMobile} alt="" />
            </div>
          </div>
          <div className="max-w-[411px] lg:max-w-[1280px] flex flex-col lg:flex-row justify-between items-center mt-32 mx-auto px-8">
            <div className="font-bold bg-yellow500 w-screen lg:w-[540px] h-[240px] text-[72px] flex justify-center items-center">
              2.6x
            </div>
            <h1 className="font-bold mt-4 lg:mt-0 text-center lg:text-left text-[28px] lg:text-[48px] max-w-[411px] lg:max-w-[565px] leading-none">
              Os clientes visitam a página de rastreio em média 2.6x por pedido.
            </h1>
          </div>
        </section>
        <section className="w-screen mt-24 bg-gradient-to-b lg:bg-gradient-to-r from-blue300 to-blue500 py-16">
          <div className="max-w-[411px] lg:max-w-[1280px] flex flex-col lg:flex-row justify-between items-center mx-auto px-8">
            <div className="flex flex-col gap-2 text-center lg:text-left mb-8 lg:mb-0">
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
          <div className="max-w-[411px] lg:max-w-[1280px] flex flex-col lg:flex-row justify-between items-center mx-auto px-8">
            <div className="hidden lg:flex">
              <Image src={productDesktop} alt="" />
            </div>
            <div className="max-w-[380px] flex flex-col gap-2">
              <h1 className="font-bold text-[28px] lg:text-[42px] leading-tight">
                MANTENHA SEUS CLIENTES ENGAJADOS
              </h1>
              <p className="font-hubballi text-lg lg:text-[22px]">
                83% dos compradores esperam por uma comunicação regular e
                eficiente sobre suas encomendas. Mantenha-os informados.
              </p>
            </div>
            <div className="flex lg:hidden">
              <Image src={productMobile} alt="" />
            </div>
          </div>
        </section>
      </main>
      <footer className="w-screen bg-gradient-to-r from-yellow300 to-yellow500 py-4 mt-24">
        <div className="max-w-[411px] lg:max-w-[1280px] px-8 mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <Image src={logoFooter} alt="Logo da CadeMeuPedido" />
          <div className="mt-12 lg:mt-0 flex flex-col lg:flex-row">
            <input
              placeholder="Seu e-mail..."
              type="text"
              className="w-[347px] bg-white py-3 px-4 focus:outline-none border-2 border-transparent focus:border-yellow900"
            />
            <button className="w-[347px] lg:w-[124px] py-3 px-4 lg:py-0 lg:px-0 font-bold text-yellow500 bg-yellow900 hover:bg-yellow900/80 transition duration-500">
              AGENDAR
            </button>
          </div>
        </div>
      </footer>
    </>
  )
}
