import { Children, Component, useState } from "react";
import {Button} from './Button'
interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface SideBarProps{
  genres?: GenreResponseProps[]
  children: any;
}

export function SideBar(props:SideBarProps) {
  // Complete aqui
  return (
    <nav className="sidebar">
    <span>Watch<p>Me</p></span>
    <div className="buttons-container">
    {props.children}    
    </div>

  </nav>
  )
}