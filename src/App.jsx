import './App.css';
import Header from './components/Header';
import PageContainer from './container/PageContainer';
import RouterConfig from './config/RouterConfig';
import Loading from './components/Loading';
import BasketDrawer from './components/BasketDrawer';  

function App() {
  return (
    <div>
      <PageContainer>
        <Loading />
        <Header />
        <BasketDrawer /> 
        <RouterConfig />
      </PageContainer>
    </div>
  );
}

export default App;
