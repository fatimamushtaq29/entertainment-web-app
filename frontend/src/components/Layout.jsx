import NavBar from "./header/NavBar"
import SearchBar from "./header/SearchBar"
export default function Layout(props) {
  return (
    <>
        <NavBar />
        <div className="pt-[clamp(5rem,2.2628rem+11.6788vw,8rem)] pb-14
                  space-y-[clamp(1.5rem,0.5876rem+3.8929vw,2.5rem)] xl:pt-16 xl:ml-[128px]">
            <SearchBar />
            {props.children}
        </div>
    </>
  )
}
