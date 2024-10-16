import NavBarComponent from "../Header/NavbarComponent"
import HeroOneComponent from "../HeroOne/HeroOneComponent"
import NewPostComponent from "../Posts/NewPostComponent"
import PostsComponent from "../Posts/PostsComponent"
import ProfileComponent from "../Profile/ProfileComponent"
import ReservationComponent from "../Reservation/ReservationComponent"

const HomeComponent = () => {
    return (
        <div>
            <HeroOneComponent />
              <NavBarComponent />
              <div className="wrapper">
                <div className="background-overlay" />
                <div className="leftSecction">
                  <ProfileComponent />
                  <ReservationComponent />
                </div>
                <div className="secction">
                  <div className="rigthSecction">
                    <NewPostComponent />
                    <PostsComponent />
                  </div>
                </div>
              </div>
        </div>
    )
}
export default HomeComponent