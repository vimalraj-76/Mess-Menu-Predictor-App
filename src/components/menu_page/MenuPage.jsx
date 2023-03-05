// This program is a React component that renders a menu page with a particle animation background and a form to select hostel, day, and meal options.
// It uses the react-tsparticles library to render the particle animation.
// The MenuForm component is imported and rendered within the MenuPage component.
// The form contains select dropdowns for hostel, day, and meal options.
// The form submission triggers an onClick event on a NavLink component which calls the onFormSubmit function to make a POST request to a local API endpoint using the axios library.
// The response data is passed to the setMenuData function through a context provided by the MyContext component.
// The selected options and the response data are used to render the menu for the selected hostel, day, and meal options.

import React from "react";
import "./MenuPage.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import MenuForm from './menu_form/MenuForm'
const MenuPage = () =>
{
    const particlesInit = async (main) => {
        await loadFull(main);
      };
      const particlesLoaded = (container) => {
      };
    return (<>
    <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: "push"
              },
              onHover: {
                enable: true,
                mode: "repulse"
              },
              resize: true
            },
            modes: {
              push: {
                quantity: 4
              },
              repulse: {
                distance: 100,
                duration: 0.4
              }
            }
          },
          particles: {
            color: {
              value: "#abf3c8"
            },
            links: {
              color: "#5ad9ac",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1
            },
            collisions: {
              enable: true
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce"
              },
              random: false,
              speed: 3,
              straight: false
            },
            number: {
              density: {
                enable: true,
                area: 1500
              },
              value: 60
            },
            opacity: {
              value: 0.4
            },
            shape: {
              type: "star"
            },
            size: {
              value: { min: 1, max: 3 }
            }
          },
          detectRetina: true
        }}
      />
        <div className="menu_page">
        <div className="bitLogo"><img src="images/logo-removebg-preview.png" alt="logo"/>
        </div>
        <MenuForm />
        </div>
        </>
    )
}
export default MenuPage;