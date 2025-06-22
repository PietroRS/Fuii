import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CardComponent } from '../../components/cards/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, CardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cards = [
    {
      imageSrc: '/assets/immagine-privato.png',
      title: 'Gestione Senza Pensieri',
      description:
        'Con Fluii, puoi controllare il tuo denaro in modo intuitivo. Effettua pagamenti con un click, gestisci il tuo saldo e visualizza le operazioni in tempo reale — tutto in totale sicurezza.',
      reverse: false
    },
    {
      imageSrc: '/assets/immagine-shop.png',
      title: 'Soluzioni Smart per Negozi',
      description:
        'Dimentica i vecchi POS e i gestionali complicati. Con Fluii puoi accettare pagamenti digitali, tracciare le vendite e fidelizzare i clienti da un’unica piattaforma moderna e intuitiva.',
      reverse: true
    },
    {
      imageSrc: '/assets/immagine-provider.png',
      title: 'Strumenti per i Provider',
      description:
        'Configura fee o il cashback,  Fluii è pensato per scalare insieme a te, con sicurezza e performance garantite.',
      reverse: false
    },
    {
      imageSrc: '/assets/immagine-pagamenti.png',
      title: 'Semplicità al Primo Posto',
      description:
        'L’interfaccia è pensata per tutti: registrazione in pochi passaggi, gestione intuitiva dei fondi, e una dashboard chiara. Con Fluii non servono manuali — tutto funziona come ti aspetti.',
      reverse: true
    }
  ];

  partners = [
    {
      name: "McDonald's",
      type: 'Ristorazione',
      logo: 'assets/mcdonald.jpg'
    },
    {
      name: 'Starbucks',
      type: 'Caffetteria',
      logo: 'assets/starbucks.jpg'
    },
    {
      name: 'Adidas',
      type: 'Sport & Moda',
      logo: 'assets/adidas.png'
    },
    {
      name: 'Amazon',
      type: 'E-commerce',
      logo: 'assets/amazon.jpg'
    },
    {
      name: 'Spotify',
      type: 'Streaming musicale',
      logo: 'assets/spotify.png'
    }
  ];
}
