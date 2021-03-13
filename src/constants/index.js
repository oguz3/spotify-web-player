import * as Icon from '../component/icons'
import React from 'react'

export default {
  MOBILE_SIZE: 640,
}

export const MENU = [
  {
    title: 'Ana sayfa',
    path: '/',
    icon: <Icon.Home />,
    iconSelected: <Icon.HomeActive />
  },
  {
    title: 'Ara',
    path: '/search',
    icon: <Icon.Search />,
    iconSelected: <Icon.SearchActive />
  },
  {
    title: 'Kitaplığın',
    path: '/library',
    icon: <Icon.Library />,
    iconSelected: <Icon.LibraryActive />
  }
]

export const PLAYLISTBTN = [
    {
      title: 'Çalma Listesi Oluştur',
      path: '/',
      ImgName: 'createPlaylist',
    },
    {
      title: 'Beğenilen Şarkılar',
      path: '/',
      ImgName: 'popularSong',
    }
]

export const LIBRARYTABS = [
  {
    title: 'Çalma Listeleri',
    path: '/library'
  },
  {
    title: 'Podcast\'ler',
    path: '/library/podcasts'
  },
  {
    title: 'Sanatçılar',
    path: '/library/artists'
  },
  {
    title: 'Albümler',
    path: '/library/albums'
  }
]