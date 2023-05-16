// export default function Home() {
//     return (
//       <div className="Home">
//         <h1>Home</h1>
//         <h2>Wide range of rolls</h2>
//         <p>In addition to classic rolls, we have branded, baked, kingrolls, hot rolls.</p>
//         <h2>The taste of real sushi and rolls</h2>
//         <p>We carefully developed our menu, selected the best products so that you finally try real sushi and rolls.</p>
//       </div>
//     );
//   }
import HomeList from "../components/HomeList/HomeList";

export default function Home() {
    return (
        <div className="Home">
            <HomeList />
        </div>
    )
}