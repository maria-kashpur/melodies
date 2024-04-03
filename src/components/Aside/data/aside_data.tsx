import HomeIco from "@assets/icons/home.svg?react";
import DiscoverIco from '@assets/icons/discover.svg?react'
import { ReactElement } from "react";
import AlbumsIco from '@assets/icons/albums.svg?react'
import ArtistIco from "@assets/icons/artists.svg?react";
import RecentlyIco from "@assets/icons/recently.svg?react";
import AddPlaylistIco from "@assets/icons/add_playlist.svg?react"
import MostPlayedIco from "@assets/icons/most_played.svg?react"
import FavoriteIco from "@assets/icons/favorites.svg?react"
import YourPlaylistIco from "@assets/icons/your_playlist.svg?react"
import SettingIco from "@assets/icons/setting.svg?react";
import LogoutIco from '@assets/icons/logout.svg?react'

const SIZE = 25

export const ASIDE: {
  [key: string]: { ico: string | ReactElement; title: string; link: string }[];
} = {
  menu: [
    {
      ico: <HomeIco className="link_ico" width={SIZE} />,
      title: "Home",
      link: "",
    },
    {
      ico: <DiscoverIco className="link_ico" height={SIZE} width={SIZE} />,
      title: "Discover",
      link: "",
    },
    {
      ico: <AlbumsIco className="link_ico" height={SIZE} width={SIZE} />,
      title: "Albums",
      link: "",
    },
    {
      ico: <ArtistIco className="link_ico" height={SIZE} width={SIZE} />,
      title: "Artist",
      link: "",
    },
  ],
  library: [
    {
      ico: <RecentlyIco className="link_ico" height={SIZE} width={SIZE} />,
      title: "Recently Added",
      link: "",
    },
    {
      ico: <MostPlayedIco className="link_ico" height={SIZE} width={SIZE} />,
      title: "Most played",
      link: "",
    },
  ],
  "Playlist and favorite": [
    {
      ico: <FavoriteIco className="link_ico" height={SIZE} width={SIZE} />,
      title: "Your favorite",
      link: "",
    },
    {
      ico: <YourPlaylistIco className="link_ico" height={SIZE} width={SIZE} />,
      title: "Your playlist",
      link: "",
    },
    {
      ico: <AddPlaylistIco className="link_ico" height={SIZE} width={SIZE} />,
      title: "Add playlist",
      link: "",
    },
  ],
  general: [
    {
      ico: <SettingIco className="link_ico" height={SIZE} width={SIZE} />,
      title: "Setting",
      link: "",
    },
    {
      ico: <LogoutIco className="link_ico" height={SIZE} width={SIZE} />,
      title: "Logout",
      link: "",
    },
  ],
};
