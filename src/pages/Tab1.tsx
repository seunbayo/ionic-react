import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Spheron</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Spheron</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="IONIC REACT DEPLOYED ON SPHERON" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
