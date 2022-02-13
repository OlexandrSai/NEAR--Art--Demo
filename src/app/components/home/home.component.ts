import { Component, OnInit } from '@angular/core';
import {ArtService} from "../../services/art.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public artService: ArtService) { }

  ngOnInit(): void {
  }

  async signIn() {
    await this.artService.nearService.handleSignIn();
  }
}
