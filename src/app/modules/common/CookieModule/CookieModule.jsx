/* base */
import React from 'react';
import ModuleContainer from 'modules/common/modulecontainer/ModuleContainer';
import { AboutTitle, Text } from 'modules/about/About.styles';
import { DescriptionParagraphBold } from 'components/sort/Paragraphs';

/**
 * todo: Please write a short component description of what this component does
 * @param {Object} customProperty - please describe component property
 */

const propTypes = {};
const defaultProps = {};

const CookieModule = props => {
  return (
    <ModuleContainer title="Cookies">
      <AboutTitle data-cy="cookie-heading">Cookie policy</AboutTitle>
      <DescriptionParagraphBold data-cy="cookie-paragraph">
        Op aidsfonds.nl en steun.aidsfonds.nl worden cookies gebruikt door
        Aidsfonds (“wij”). Een cookie is een klein tekstbestand dat op je
        computer wordt opgeslagen wanneer je deze website bezoekt. In deze
        cookie policy kun je lezen welke cookies wij gebruiken en hoe je zelf
        cookies kunt uitschakelen.
      </DescriptionParagraphBold>

      <Text data-cy="cookie-paragraph">
        <strong>Functionele cookies</strong>
        <p>
          Dit zijn cookies die nodig zijn om de site voor de bezoeker goed te
          laten werken. Deze cookies zorgen er bijvoorbeeld voor dat jouw keuze
          voor het wel of niet toestaan van het gebruik van niet-functionele
          cookies wordt vastgelegd. Bij een volgend bezoek hoeft u deze keuze
          niet opnieuw te maken.
        </p>
      </Text>

      <Text data-cy="cookie-paragraph">
        <strong>Analytische cookies</strong>
        <p>
          Dit zijn cookies die wij gebruiken om de effectiviteit van deze
          website te beoordelen en waar nodig de website aan te passen. Het gaat
          hierbij bijvoorbeeld om welke pagina's het meeste worden bezocht, hoe
          lang bezoekers gemiddeld op de pagina blijven en met welke browsers
          bezoekers naar onze site surfen.
        </p>

        <p>
          Wij maken hiervoor gebruik van Google Analytics (
          <a
            href="https://www.google.com/policies/technologies/cookies/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.google.com/policies/technologies/cookies/
          </a>
          ). Aidsfonds heeft hiervoor een bewerkersovereenkomst met Google. Bij
          het delen van jouw gegevens wordt je IP-adres anoniem gemaakt. Jouw
          gegevens kunnen ook niet gebruikt kunnen worden door derden. De
          cookies worden maximaal 26 maanden bewaard. Om te voorkomen dat je
          gegevens worden gebruikt voor Google Analytics kun je de ‘Google
          Analytics Opt-out Browser Add-on’ installeren.
        </p>
      </Text>

      <Text data-cy="cookie-paragraph">
        <strong>Cookies uitschakelen</strong>
        <p>
          Als Aidsfonds wettelijk verplicht is om jouw toestemming te vragen
          voordat we cookies plaatsen en uitlezen, dan doen we dat alleen als
          jij aangeeft dat je dat wilt. Je kan die toestemming altijd intrekken
          door de cookies via je browser te verwijderen.
        </p>

        <p>
          Door het aanpassen van de instellingen van je browser kun je ervoor
          kiezen om cookies te weigeren, te wissen of een bericht te krijgen
          wanneer een cookie wordt geplaatst. Het “help” onderdeel van de
          menubalk van de meeste browsers geeft uitleg over hoe je dit kunt
          doen. Door cookies geheel te weigeren kan het zijn dat de website niet
          meer naar behoren functioneert.
        </p>
      </Text>

      <Text data-cy="cookie-paragraph">
        <strong>Wijzigen</strong>
        <p>
          Wij kunnen deze cookie policy aanpassen en raden je aan om deze pagina
          zo nu en dan te raadplegen om op de hoogte te blijven van de manier
          waarop wij cookies gebruiken. Deze cookie policy is voor het laatst
          bijgewerkt op: 22 maart 2019.
        </p>
      </Text>

      <Text data-cy="cookie-paragraph">
        <strong>Vragen, feedback en klachten</strong>
        <p>
          Jouw vragen en opmerkingen met betrekking tot deze cookie policy zijn
          welkom. Hiervoor kun je bellen naar 020 - 344 63 81. We zijn
          bereikbaar op werkdagen van 7:00 tot 21:00 uur en op zaterdag van 9:00
          tot 17:00 uur. Of je kunt een e-mail sturen naar
          <a
            href="mailto:donateurs@aidsfonds.nl"
            target="_blank"
            rel="noopener noreferrer"
          >
            donateurs@aidsfonds.nl
          </a>
          . Ook voor vragen over je donateurschap kun je ons hier altijd
          bereiken.
        </p>

        <p>
          Aidsfonds beschikt ook over een klachtenprocedure. Klachten kunnen
          worden ingediend bij de klachtencoördinator:
        </p>

        <p>
          drs. Martin van Oostrom
          <br />
          <a
            href="mailto:mvanoostrom@aidsfonds.nl"
            target="_blank"
            rel="noopener noreferrer"
          >
            mvanoostrom@aidsfonds.nl
          </a>
          <br />
          020 – 8511758
        </p>

        <p>
          Aidsfonds is een Nederlandse Stichting gevestigd op de Keizersgracht
          392, 1016 GB, in Amsterdam en geregistreerd bij de Kamer van
          Koophandel onder nummer 41207989.
        </p>

        <p>
          Volledige{' '}
          <a
            href="https://aidsfonds.nl/contact/privacy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            privacy policy Aidsfonds
          </a>
        </p>
      </Text>
    </ModuleContainer>
  );
};

CookieModule.propTypes = propTypes;
CookieModule.defaultProps = defaultProps;

export default CookieModule;
