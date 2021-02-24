 import '../Styles/main.scss'


 import Overlay from './Overlay/Overlay'
 import Menu from './Menu/Menu'
 import MainContent from './MainContent/MainContent'
 
 const App = () =>  {
  return (
    <div className="app-container">
      <Overlay />

      <div className="discovering-container">
        <Menu />
        <MainContent />
      </div>
    </div>
    
  );
}

export default App;
