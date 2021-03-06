/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Angular
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import '@angular/http';
import '@angular/router';

// RxJS
import 'rxjs';

// hammerjs
import 'hammerjs';

// Alfresco
import 'alfresco-js-api';
import 'ng2-alfresco-core';
import 'ng2-alfresco-datatable';
import 'ng2-activiti-diagrams';
import 'ng2-activiti-analytics';
import 'ng2-activiti-form';
import 'ng2-activiti-processlist';
import 'ng2-activiti-tasklist';
import 'ng2-alfresco-documentlist';
import 'ng2-alfresco-login';
import 'ng2-alfresco-search';
import 'ng2-alfresco-tag';
import 'ng2-alfresco-social';
import 'ng2-alfresco-upload';
import 'ng2-alfresco-viewer';
import 'ng2-alfresco-webscript';
import 'ng2-alfresco-userinfo';

// Polyfill(s) for dialogs
require('script-loader!dialog-polyfill/dialog-polyfill');
import 'dialog-polyfill/dialog-polyfill.css';

// Load the Angular Material 2 stylesheet
import '@angular/material/prebuilt-themes/indigo-pink.css';

// Google Material Design Lite
import 'material-design-lite/material.js';
import 'material-design-lite/dist/material.orange-blue.min.css';
import 'material-design-icons/iconfont/material-icons.css';

import '../public/css/app.css';
import '../public/css/muli-font.css';

import 'ng2-activiti-form/stencils/runtime.ng1';
import 'ng2-activiti-form/stencils/runtime.adf';

import 'ng2-charts';
import 'chart.js';
require('script-loader!raphael/raphael.min.js');

require('script-loader!moment/min/moment.min.js');

import 'md-date-time-picker/dist/css/mdDateTimePicker.css';
require('script-loader!md-date-time-picker/dist/js/mdDateTimePicker.min.js');
require('script-loader!md-date-time-picker/dist/js/draggabilly.pkgd.min.js');

require('pdfjs-dist/web/compatibility.js');

// Setting worker path to worker bundle.
let pdfjsLib = require('pdfjs-dist');
if (process.env.ENV === 'production') {
    pdfjsLib.PDFJS.workerSrc = './pdf.worker.js';
} else {
    pdfjsLib.PDFJS.workerSrc = '../../node_modules/pdfjs-dist/build/pdf.worker.js';
}

require('pdfjs-dist/web/pdf_viewer.js');
require('three/build/three.min.js');

// 3D viewer
import 'three';
import 'ng2-3d-editor';
