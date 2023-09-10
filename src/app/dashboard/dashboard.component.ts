import { Component, AfterViewInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SnackbarService } from '../services/snackbar.service';
import { GlobalConstants } from '../shared/global-constants';
import { DashboardService } from '../services/dashboard.service';
@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {

	responseMessage: any;
	data: any;

	ngAfterViewInit() { }

	constructor(private dashboardService: DashboardService,
		private ngxSerive: NgxUiLoaderService,
		private sncakbarSerice: SnackbarService) {
		this.ngxSerive.start();
		this.dashboardData();
	}

	dashboardData() {
		this.dashboardService.getDetails().subscribe((response:any)=>{
			this.ngxSerive.stop();
			this.data = response;
		},(error:any)=>{
			this.ngxSerive.stop();
			console.log(error);
			if(error.error?.message){
				this.responseMessage = error.error?.message;
			}else{
				this.responseMessage = GlobalConstants.generateError;
			}
			this.sncakbarSerice.openSnackBar(this.responseMessage,GlobalConstants.error);
		})
	 }

}
