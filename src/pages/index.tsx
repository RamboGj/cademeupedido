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
import * as Slider from '@radix-ui/react-slider'

import { useState } from 'react'

export default function Home() {
  const [dropdownMenuIsOpen, setDropdownMenuIsOpen] = useState<boolean>(false)
  const [numberOfCourriers, setNumberOfCourriers] = useState<number[]>([0])
  const [numberOfOrders, setNumberOfOrders] = useState<number[]>([0])
  const [totalValueOfInvestment, setTotalValueOfInvestment] =
    useState<number>(0)

  const zeroTo100Orders = numberOfOrders[0] >= 0 && numberOfOrders[0] <= 100
  const oneHundredOneTo200Orders =
    numberOfOrders[0] >= 101 && numberOfOrders[0] <= 200
  const twoHundredOneTo300Orders =
    numberOfOrders[0] >= 201 && numberOfOrders[0] <= 300
  const threeHundredOneTo400Orders =
    numberOfOrders[0] >= 301 && numberOfOrders[0] <= 400
  const fourHundredOneTo500Orders =
    numberOfOrders[0] >= 401 && numberOfOrders[0] <= 500
  const fiveHundredOneTo600Orders =
    numberOfOrders[0] >= 501 && numberOfOrders[0] <= 600
  const sixHundredOneTo700Orders =
    numberOfOrders[0] >= 601 && numberOfOrders[0] <= 700

  const sevenHundredOneTo800Orders =
    numberOfOrders[0] >= 701 && numberOfOrders[0] <= 800

  const eightHundredOneTo900Orders =
    numberOfOrders[0] >= 801 && numberOfOrders[0] <= 900

  const nineHundredOneTo1000Orders =
    numberOfOrders[0] >= 901 && numberOfOrders[0] <= 1000

  const oneToTwoCourriers =
    numberOfCourriers[0] === 1 || numberOfCourriers[0] === 2

  const threeToFourCourriers =
    numberOfCourriers[0] === 3 || numberOfCourriers[0] === 4

  const fiveToSixCourriers =
    numberOfCourriers[0] === 5 || numberOfCourriers[0] === 6

  const sevenToEightCourriers =
    numberOfCourriers[0] === 7 || numberOfCourriers[0] === 8

  const nineToTenCourriers =
    numberOfCourriers[0] === 9 || numberOfCourriers[0] === 10

  const elevenToTwelveCourriers =
    numberOfCourriers[0] === 11 || numberOfCourriers[0] === 12

  const thirtheenToFourteenCourriers =
    numberOfCourriers[0] === 13 || numberOfCourriers[0] === 14

  const fifteenToSixteenCourriers =
    numberOfCourriers[0] === 15 || numberOfCourriers[0] === 16

  function handleCalculateTotalInvestmentValue(numberOfOrders: number) {
    let taxPerOrder = 0
    if (oneToTwoCourriers) {
      if (zeroTo100Orders) {
        taxPerOrder = 0.6
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
      if (oneHundredOneTo200Orders) {
        taxPerOrder = 0.59
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
      if (twoHundredOneTo300Orders) {
        taxPerOrder = 0.58
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
      if (threeHundredOneTo400Orders) {
        taxPerOrder = 0.57
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
      if (fourHundredOneTo500Orders) {
        taxPerOrder = 0.56
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
      if (fiveHundredOneTo600Orders) {
        taxPerOrder = 0.55
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
      if (sixHundredOneTo700Orders) {
        taxPerOrder = 0.54
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
      if (sevenHundredOneTo800Orders) {
        taxPerOrder = 0.53
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
      if (eightHundredOneTo900Orders) {
        taxPerOrder = 0.52
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
      if (nineHundredOneTo1000Orders) {
        taxPerOrder = 0.51
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
    }
    if (threeToFourCourriers) {
      if (zeroTo100Orders) {
        taxPerOrder = 0.61
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
      if (oneHundredOneTo200Orders) {
        taxPerOrder = 0.6
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
      if (twoHundredOneTo300Orders) {
        taxPerOrder = 0.59
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
      if (threeHundredOneTo400Orders) {
        taxPerOrder = 0.58
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
      if (fourHundredOneTo500Orders) {
        taxPerOrder = 0.57
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
      if (fiveHundredOneTo600Orders) {
        taxPerOrder = 0.56
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
      if (sixHundredOneTo700Orders) {
        taxPerOrder = 0.55
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
      if (sevenHundredOneTo800Orders) {
        taxPerOrder = 0.54
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
      if (eightHundredOneTo900Orders) {
        taxPerOrder = 0.53
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
      if (nineHundredOneTo1000Orders) {
        taxPerOrder = 0.52
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
    }
    if (fiveToSixCourriers) {
      if (zeroTo100Orders) {
        taxPerOrder = 0.62
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
      if (oneHundredOneTo200Orders) {
        taxPerOrder = 0.61
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
      if (twoHundredOneTo300Orders) {
        taxPerOrder = 0.6
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
      if (threeHundredOneTo400Orders) {
        taxPerOrder = 0.59
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
      if (fourHundredOneTo500Orders) {
        taxPerOrder = 0.58
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
      if (fiveHundredOneTo600Orders) {
        taxPerOrder = 0.57
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
      if (sixHundredOneTo700Orders) {
        taxPerOrder = 0.55
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
      if (sevenHundredOneTo800Orders) {
        taxPerOrder = 0.54
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
      if (eightHundredOneTo900Orders) {
        taxPerOrder = 0.53
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
      if (nineHundredOneTo1000Orders) {
        taxPerOrder = 0.52
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
    }
    if (sevenToEightCourriers) {
      if (zeroTo100Orders) {
        taxPerOrder = 0.63
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
      if (oneHundredOneTo200Orders) {
        taxPerOrder = 0.62
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
      if (twoHundredOneTo300Orders) {
        taxPerOrder = 0.61
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
      if (threeHundredOneTo400Orders) {
        taxPerOrder = 0.6
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
      if (fourHundredOneTo500Orders) {
        taxPerOrder = 0.59
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
      if (fiveHundredOneTo600Orders) {
        taxPerOrder = 0.58
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
      if (sixHundredOneTo700Orders) {
        taxPerOrder = 0.57
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
      if (sevenHundredOneTo800Orders) {
        taxPerOrder = 0.56
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
      if (eightHundredOneTo900Orders) {
        taxPerOrder = 0.55
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
      if (nineHundredOneTo1000Orders) {
        taxPerOrder = 0.54
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
    }
    if (nineToTenCourriers) {
      if (zeroTo100Orders) {
        taxPerOrder = 0.64
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
      if (oneHundredOneTo200Orders) {
        taxPerOrder = 0.63
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
      if (twoHundredOneTo300Orders) {
        taxPerOrder = 0.62
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
      if (threeHundredOneTo400Orders) {
        taxPerOrder = 0.61
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
      if (fourHundredOneTo500Orders) {
        taxPerOrder = 0.6
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
      if (fiveHundredOneTo600Orders) {
        taxPerOrder = 0.59
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
      if (sixHundredOneTo700Orders) {
        taxPerOrder = 0.58
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
      if (sevenHundredOneTo800Orders) {
        taxPerOrder = 0.57
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
      if (eightHundredOneTo900Orders) {
        taxPerOrder = 0.56
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
      if (nineHundredOneTo1000Orders) {
        taxPerOrder = 0.55
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
    }
    if (elevenToTwelveCourriers) {
      if (zeroTo100Orders) {
        taxPerOrder = 0.65
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
      if (oneHundredOneTo200Orders) {
        taxPerOrder = 0.64
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
      if (twoHundredOneTo300Orders) {
        taxPerOrder = 0.63
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
      if (threeHundredOneTo400Orders) {
        taxPerOrder = 0.62
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
      if (fourHundredOneTo500Orders) {
        taxPerOrder = 0.61
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
      if (fiveHundredOneTo600Orders) {
        taxPerOrder = 0.6
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
      if (sixHundredOneTo700Orders) {
        taxPerOrder = 0.59
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
      if (sevenHundredOneTo800Orders) {
        taxPerOrder = 0.58
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
      if (eightHundredOneTo900Orders) {
        taxPerOrder = 0.57
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
      if (nineHundredOneTo1000Orders) {
        taxPerOrder = 0.56
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
    }
    if (thirtheenToFourteenCourriers) {
      if (zeroTo100Orders) {
        taxPerOrder = 0.66
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
      if (oneHundredOneTo200Orders) {
        taxPerOrder = 0.65
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
      if (twoHundredOneTo300Orders) {
        taxPerOrder = 0.64
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
      if (threeHundredOneTo400Orders) {
        taxPerOrder = 0.63
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
      if (fourHundredOneTo500Orders) {
        taxPerOrder = 0.62
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
      if (fiveHundredOneTo600Orders) {
        taxPerOrder = 0.61
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
      if (sixHundredOneTo700Orders) {
        taxPerOrder = 0.6
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
      if (sevenHundredOneTo800Orders) {
        taxPerOrder = 0.59
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
      if (eightHundredOneTo900Orders) {
        taxPerOrder = 0.58
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
      if (nineHundredOneTo1000Orders) {
        taxPerOrder = 0.57
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
    }
    if (fifteenToSixteenCourriers) {
      if (zeroTo100Orders) {
        taxPerOrder = 0.67
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
      if (oneHundredOneTo200Orders) {
        taxPerOrder = 0.66
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
      if (twoHundredOneTo300Orders) {
        taxPerOrder = 0.65
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
      if (threeHundredOneTo400Orders) {
        taxPerOrder = 0.64
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
      if (fourHundredOneTo500Orders) {
        taxPerOrder = 0.63
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
      if (fiveHundredOneTo600Orders) {
        taxPerOrder = 0.62
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
      if (sixHundredOneTo700Orders) {
        taxPerOrder = 0.61
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
      if (sevenHundredOneTo800Orders) {
        taxPerOrder = 0.6
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
      if (eightHundredOneTo900Orders) {
        taxPerOrder = 0.59
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
      if (nineHundredOneTo1000Orders) {
        taxPerOrder = 0.58
        setTotalValueOfInvestment(numberOfOrders * taxPerOrder)
      }
    }
  }

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
          <button className="hidden lg:flex border-2 border-white text-white font-bold px-6 py-2 hover:bg-white hover:text-yellow900 transition duration-500">
            FALE CONOSCO
          </button>
        </div>
      </header>
      <main className="w-screen text-yellow900">
        <section className="w-screen bg-gradient-to-r from-yellow300 to-yellow500 pt-2">
          <div className="max-w-[411px] lg:max-w-[1280px] mx-auto px-8 flex-col lg:flex-row flex justify-between items-start py-24">
            <div className="flex flex-col max-w-[440px]">
              <h1 className="text-xl lg:text-[32px] leading-tight font-bold">
                FAÇA DO PÓS VENDA A MELHOR PARTE DA EXPERIÊNCIA DO USUÁRIO
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
        <section className="w-screen mt-24 lg:mt-64">
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
        <section className="w-screen mt-24 lg:mt-64 bg-gradient-to-b lg:bg-gradient-to-r from-blue300 to-blue500 py-16">
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
        <section className="w-screen mt-24 lg:mt-64 ">
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
        <section className="w-screen mt-48">
          <div className="max-w-[411px] lg:max-w-[600px] mx-auto px-8 py-12 bg-yellow300 rounded-xl">
            <div className="flex flex-col w-full text-center justify-center">
              <h1 className="text-xl lg:text-[32px] leading-tight font-bold">
                SIMULE SEU INVESTIMENTO
              </h1>
              <p className="font-hubballi text-lg lg:text-[22px] mt-2">
                Faça abaixo uma simulação do seu investimento
              </p>
              <div className="mt-12 w-full flex flex-col">
                <span className="mb-2 text-xl">Número de transportadoras</span>
                <span className="mb-8 text-3xl font-bold">
                  {numberOfCourriers}
                </span>
                <Slider.Root
                  value={numberOfCourriers}
                  onValueChange={(value) => {
                    setNumberOfCourriers(value)
                  }}
                  min={1}
                  max={16}
                  orientation="horizontal"
                  className="w-[280px] mx-auto flex items-center relative h-5"
                >
                  <Slider.Track className="w-full relative text-yellow900 bg-yellow900 h-1">
                    <Slider.Range className="absolute bg-yellow500 h-1" />
                  </Slider.Track>
                  <Slider.Thumb className="absolute rounded-full w-5 h-5  bg-yellow500 -mt-[10px] focus:outline-none" />
                </Slider.Root>
              </div>
              <div className="mt-12 w-full flex flex-col">
                <span className="mb-2 text-xl">Número de pedidos</span>
                <span className="mb-8 text-3xl font-bold">
                  {numberOfOrders}
                </span>
                <Slider.Root
                  value={numberOfOrders}
                  onValueChange={(value) => {
                    setNumberOfOrders(value)
                  }}
                  min={0}
                  max={1000}
                  orientation="horizontal"
                  className="w-[280px] mx-auto flex items-center relative h-5"
                >
                  <Slider.Track className="w-full relative text-yellow900 bg-yellow900 h-1">
                    <Slider.Range className="absolute bg-yellow500 h-1" />
                  </Slider.Track>
                  <Slider.Thumb className="absolute rounded-full w-5 h-5  bg-yellow500 -mt-[10px] focus:outline-none" />
                </Slider.Root>
              </div>
              <div className="mt-12 w-full flex flex-col">
                <span className="mb-2 text-xl">Valor Final</span>
                <span className="mb-8 text-5xl font-bold">
                  R$ {totalValueOfInvestment?.toFixed(2)}
                </span>

                <button
                  onClick={() =>
                    handleCalculateTotalInvestmentValue(numberOfOrders[0])
                  }
                  className="mt-8 w-full rounded-lg bg-yellow500 h-16 font-bold text-lg hover:bg-yellow600 transition duration-500"
                >
                  SIMULAR
                </button>
              </div>
            </div>
            <div className="flex lg:hidden mx-auto">
              <Image src={smartphoneMobile} alt="Foto de um smartphone" />
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
