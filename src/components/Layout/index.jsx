import PropTypes from 'prop-types'; // Se usa para validar las propiedades que recibe un componente.

function Layout({ children }) {
  return <div className="flex flex-col mt-20 items-center">{children}</div>;
}

Layout.propTypes = { //Los propTypes son una propiedad especial de React que se utiliza para validar las propiedades que recibe un componente.
  children: PropTypes.node.isRequired, //PropTypes.node es un tipo de datos que acepta cualquier tipo de datos que se puede representar en React.
};

export default Layout;
