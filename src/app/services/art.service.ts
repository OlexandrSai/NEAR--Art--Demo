import { Injectable } from '@angular/core';
import {NearService} from "./near.service";

@Injectable({
  providedIn: 'root'
})
export class ArtService {
  public generatedDesign  = false;
  public myDesign = false;
  public isLoading = false;
  public err = null;

  constructor(public nearService: NearService) { }

  async handleGenerateDesign(accountId: any) {
    this.isLoading = true
    await this.nearService.generateDesign(accountId)
    this.generatedDesign = await this.nearService.getTempDesign(accountId)
    this.isLoading = false
  }

  async handleClaimDesign(seed: any) {
    this.isLoading = true
    await this.nearService.claimDesign(seed).then(res=>console.log(res), res=>console.log(res))
    this.myDesign = await this.nearService.getViewMyDesign(this.nearService.accountId)
    this.isLoading = false
  }

  async handleBurnDesign() {
    this.isLoading = true
    await this.nearService.burnDesign()
    this.myDesign = false
    this.isLoading = false
  }
}
