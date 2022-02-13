import { Component, OnInit } from '@angular/core';
import {ArtService} from "../../services/art.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public artService: ArtService) { }

  ngOnInit(): void {
    this.loadArt();
  }

  signOut() {
    this.artService.nearService.handleSignOut();
  }

  async loadArt() {
    await this.artService.loadArt();
  }
}
