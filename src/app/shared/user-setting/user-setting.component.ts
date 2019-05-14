import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-setting',
  templateUrl: './user-setting.component.html',
  styleUrls: ['./user-setting.component.scss']
})
export class UserSettingComponent implements OnInit {
  settingsForm: any;

  constructor(
    public dialogRef: MatDialogRef<UserSettingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb : FormBuilder) { }

  ngOnInit() {
    if(this.data){
      this.settingsForm = this.fb.group({
      'name': [this.data.name, Validators.required],
      'email': [this.data.email, Validators.required],
      'phone': [this.data.phone, [Validators.required]],
      'mobile': [this.data.mobile, Validators.required],
      'location': [this.data.location, Validators.required],
      'address': [this.data.address, Validators.required],
    });
    } else {
      this.settingsForm = this.fb.group({
      'name': ['', Validators.required],
      'email': ['', Validators.required],
      'phone': ['', [Validators.required]],
      'mobile': ['', Validators.required],
      'location': ['', Validators.required],
      'address': ['', Validators.required],
    })
  }

}

}