import { Component } from '@angular/core';

@Component({
  selector: 'app-register-component',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  organizationType: any[];

  constructor() {
    this.organizationType = [
      { code: 'PRIVATE', nameNO: 'Aksjeselskap', name: 'Limited company' },
      { code: 'PUBLIC', nameNO: 'Allmennaksjeselskap', name: 'Public limited company' },
      { code: 'PERSON', nameNO: 'Enkeltpersonforetak', name: 'Sole proprietorship' },
      { code: 'DAO', nameNO: 'Decentralized Autonomous Organization', name: 'Decentralized Autonomous Organization' },
      { code: 'CLUB', nameNO: 'Forening/lag/innretning', name: 'Association/club/organization' },
      { code: 'FON', nameNO: 'Stiftelse', name: 'Foundation' },
      { code: 'NPO', nameNO: 'Nonprofit organization', name: 'Nonprofit organization' },
      { code: 'COOP', nameNO: 'Samvirkeforetak', name: 'Co-operative' },
      { code: 'INACTIVE', nameNO: 'Ikke næringsdrivende virksomhet', name: 'No business activity' },
      { code: 'GENERAL', nameNO: 'Ansvarlig selskap med solidarisk ansvar', name: 'General Partnership' },
      { code: 'COWORK', nameNO: 'Kontorfellesskap', name: 'Joint office' },
      { code: 'COOPERATIVE', nameNO: 'Borettslag', name: 'Housing cooperative' },
      { code: 'COOPERATIVEHOUSING', nameNO: 'Boligbyggelag', name: 'House building cooperative' },
      { code: 'INSURANCE', nameNO: 'Forsikringsselskap', name: 'Insurance company' },
      { code: 'INSURANCEMUTUAL', nameNO: 'Gjensidig forsikringsselskap', name: 'Mutual insurance company' },
      { code: 'BANKRUPT', nameNO: 'Konkursbo', name: 'Bankrupt estate' },
      { code: 'REGISTRY', nameNO: 'Global Registry Services Limited', name: 'Global Registry Services Limited' },
    ];
  }
}
