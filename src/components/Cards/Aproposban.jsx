import React from 'react'
import image1 from "../../assets/img/slogan.png"
import { Link } from 'react-router-dom'

export default function Aproposban() {
  return (
    <div>
      <div className="text-center flex justify-between">
        <div className="md:pr-12">
          <img alt="..."
            src={image1} width="1000px" height="300px" />


          <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
            En 2022 à Madagascar, On Line Format-Tic est une entreprise sociale.
            En tant que « développeur et administrateur réseaux », nous nous efforçons d’allier
            « ludisme et engagement dans chacun de nos projets ». Notre vision : utiliser le numérique
            comme un moyen de véhiculer nos valeurs culturelles. Nous travaillons pour des startups,
            des institutions et des entreprises tant au niveau local qu’international.
            Nos services numériques comprennent le développement d’applications mobiles,
            de réalité virtuelle et augmentée, de sites web et de visites virtuelles.
          </p>
          <Link to={'/Minibioclient'} class='link'> <button className="submit-button"
            >
                Plus d'info sur nous
            </button> </Link>

        </div>
      </div>
    </div>
  )
}
