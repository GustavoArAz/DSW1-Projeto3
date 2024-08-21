import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { Routes, Route } from "react-router-dom";
// Pages
import LFGNavbar from "./components/Navbar";
import MainPage from "./pages/MainPage";
import SignIn from "./pages/SignIn";
import Login from "./pages/Login";
// Destiny 2
import LFGDestiny2 from "./pages/LFGDestiny2";
import CreateLFGDestiny2Post from "./pages/CreateLFGDestiny2Post";
import ForumDestiny2 from "./pages/ForumDestiny2";
import CreateForumDestiny2Post from "./pages/CreateForumDestiny2Post";
// Helldivers 2
import LFGHelldivers2 from "./pages/LFGHelldivers2";
import CreateLFGHelldivers2Post from "./pages/CreateLFGHelldivers2Post";
import ForumHelldivers2 from "./pages/ForumHelldivers2";
import CreateForumHelldivers2Post from "./pages/CreateForumHelldivers2Post";
// Diablo IV
import LFGDiabloIV from "./pages/LFGDiabloIV";
import CreateLFGDiabloIVPost from "./pages/CreateLFGDiabloIVPost";
import ForumDiabloIV from "./pages/ForumDiabloIV";
import CreateForumDiabloIVPost from "./pages/CreateForumDiabloIVPost";
// Final Fantasy XIV
import LFGFinalFantasyXIV from "./pages/LFGFinalFantasyXIV";
import CreateLFGFinalFantasyXIVPost from "./pages/CreateLFGFinalFantasyXIVPost";
import ForumFinalFantasyXIV from "./pages/ForumFinalFantasyXIV";
import CreateForumFinalFantasyXIVPost from "./pages/CreateForumFinalFantasyXIVPost";
// League of Legends
import LFGLeagueOfLegends from "./pages/LFGLeagueOfLegends";
import CreateLFGLeagueOfLegendsPost from "./pages/CreateLFGLeagueOfLegendsPost";
import ForumLeagueOfLegends from "./pages/ForumLeagueOfLegends";
import CreateForumLeagueOfLegendsPost from "./pages/CreateForumLeagueOfLegendsPost";
// Overwatch 2
import LFGOverwatch2 from "./pages/LFGOverwatch2";
import CreateLFGOverwatch2Post from "./pages/CreateLFGOverwatch2Post";
import ForumOverwatch2 from "./pages/ForumOverwatch2";
import CreateForumOverwatch2Post from "./pages/CreateForumOverwatch2Post";
// Rainbow 6 Siege
import LFGRainbow6Siege from "./pages/LFGRainbow6Siege";
import CreateLFGRainbow6SiegePost from "./pages/CreateLFGRainbow6SiegePost";
import ForumRainbow6Siege from "./pages/ForumRainbow6Siege";
import CreateForumRainbow6SiegePost from "./pages/CreateForumRainbow6SiegePost";
// Valorant
import LFGValorant from "./pages/LFGValorant";
import CreateLFGValorantPost from "./pages/CreateLFGValorantPost";
import ForumValorant from "./pages/ForumValorant";
import CreateForumValorantPost from "./pages/CreateForumValorantPost";
// Warframe
import LFGWarframe from "./pages/LFGWarframe";
import CreateLFGWarframePost from "./pages/CreateLFGWarframePost";
import ForumWarframe from "./pages/ForumWarframe";
import CreateForumWarframePost from "./pages/CreateForumWarframePost";
// Apex Legends
import LFGApexLegends from "./pages/LFGApexLegends";
import CreateLFGApexLegendsPost from "./pages/CreateLFGApexLegendsPost";
import ForumApexLegends from "./pages/ForumApexLegends";
import CreateForumApexLegendsPost from "./pages/CreateForumApexLegendsPost";

function App() {
  return (
    <div>
      <LFGNavbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
        {/* Destiny 2 */}
        <Route path="/lfgdestiny2" element={<LFGDestiny2 />} />
        <Route
          path="/createlfgdestiny2post"
          element={<CreateLFGDestiny2Post />}
        />
        <Route path="/forumdestiny2" element={<ForumDestiny2 />} />
        <Route
          path="/createforumdestiny2post"
          element={<CreateForumDestiny2Post />}
        />
        {/* Helldivers 2 */}
        <Route path="/lfghelldivers2" element={<LFGHelldivers2 />} />
        <Route
          path="/createlfghelldivers2post"
          element={<CreateLFGHelldivers2Post />}
        />
        <Route path="/forumhelldivers2" element={<ForumHelldivers2 />} />
        <Route
          path="/createforumhelldivers2post"
          element={<CreateForumHelldivers2Post />}
        />
        {/* Diablo IV */}
        <Route path="/lfgdiabloiv" element={<LFGDiabloIV />} />
        <Route
          path="/createlfgdiabloivpost"
          element={<CreateLFGDiabloIVPost />}
        />
        <Route path="/forumdiabloiv" element={<ForumDiabloIV />} />
        <Route
          path="/createforumdiabloivpost"
          element={<CreateForumDiabloIVPost />}
        />
        {/* Final Fantasy XIV */}
        <Route path="/lfgfinalfantasyxiv" element={<LFGFinalFantasyXIV />} />
        <Route
          path="/createlfgfinalfantasyxivpost"
          element={<CreateLFGFinalFantasyXIVPost />}
        />
        <Route
          path="/forumfinalfantasyxiv"
          element={<ForumFinalFantasyXIV />}
        />
        <Route
          path="/createforumfinalfantasyxivpost"
          element={<CreateForumFinalFantasyXIVPost />}
        />
        {/* League of Legends */}
        <Route path="/lfgleagueoflegends" element={<LFGLeagueOfLegends />} />
        <Route
          path="/createlfgleagueoflegendspost"
          element={<CreateLFGLeagueOfLegendsPost />}
        />
        <Route
          path="/forumleagueoflegends"
          element={<ForumLeagueOfLegends />}
        />
        <Route
          path="/createforumleagueoflegendspost"
          element={<CreateForumLeagueOfLegendsPost />}
        />
        {/* Overwatch 2 */}
        <Route path="/lfgoverwatch2" element={<LFGOverwatch2 />} />
        <Route
          path="/createlfgoverwatch2post"
          element={<CreateLFGOverwatch2Post />}
        />
        <Route path="/forumoverwatch2" element={<ForumOverwatch2 />} />
        <Route
          path="/createforumoverwatch2post"
          element={<CreateForumOverwatch2Post />}
        />
        {/* Rainbow 6 Siege */}
        <Route path="/lfgrainbow6siege" element={<LFGRainbow6Siege />} />
        <Route
          path="/createlfgrainbow6siegepost"
          element={<CreateLFGRainbow6SiegePost />}
        />
        <Route path="/forumrainbow6siege" element={<ForumRainbow6Siege />} />
        <Route
          path="/createforumrainbow6siegepost"
          element={<CreateForumRainbow6SiegePost />}
        />
        {/* Valorant */}
        <Route path="/lfgvalorant" element={<LFGValorant />} />
        <Route
          path="/createlfgvalorantpost"
          element={<CreateLFGValorantPost />}
        />
        <Route path="/forumvalorant" element={<ForumValorant />} />
        <Route
          path="/createforumvalorantpost"
          element={<CreateForumValorantPost />}
        />
        {/* Warframe */}
        <Route path="/lfgwarframe" element={<LFGWarframe />} />
        <Route
          path="/createlfgwarframepost"
          element={<CreateLFGWarframePost />}
        />
        <Route path="/forumwarframe" element={<ForumWarframe />} />
        <Route
          path="/createforumwarframepost"
          element={<CreateForumWarframePost />}
        />
        {/* Apex Legends */}
        <Route path="/lfgapexlegends" element={<LFGApexLegends />} />
        <Route
          path="/createlfgapexlegendspost"
          element={<CreateLFGApexLegendsPost />}
        />
        <Route path="/forumapexlegends" element={<ForumApexLegends />} />
        <Route
          path="/createforumapexlegendspost"
          element={<CreateForumApexLegendsPost />}
        />
      </Routes>
    </div>
  );
}

export default App;
