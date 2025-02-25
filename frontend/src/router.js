
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


import ApplicationProcessingApplicationManager from "./components/listers/ApplicationProcessingApplicationCards"
import ApplicationProcessingApplicationDetail from "./components/listers/ApplicationProcessingApplicationDetail"

import ApplicationSummaryView from "./components/ApplicationSummaryView"
import ApplicationSummaryViewDetail from "./components/ApplicationSummaryViewDetail"
import ApplicationDetailsView from "./components/ApplicationDetailsView"
import ApplicationDetailsViewDetail from "./components/ApplicationDetailsViewDetail"
import DataCollectionDataCollectorManager from "./components/listers/DataCollectionDataCollectorCards"
import DataCollectionDataCollectorDetail from "./components/listers/DataCollectionDataCollectorDetail"

import DataCollectionTaskSummaryView from "./components/DataCollectionTaskSummaryView"
import DataCollectionTaskSummaryViewDetail from "./components/DataCollectionTaskSummaryViewDetail"
import DataCollectionTaskDetailsView from "./components/DataCollectionTaskDetailsView"
import DataCollectionTaskDetailsViewDetail from "./components/DataCollectionTaskDetailsViewDetail"
import DataCollectionLogView from "./components/DataCollectionLogView"
import DataCollectionLogViewDetail from "./components/DataCollectionLogViewDetail"
import DocumentIssuancePdfDocumentManager from "./components/listers/DocumentIssuancePdfDocumentCards"
import DocumentIssuancePdfDocumentDetail from "./components/listers/DocumentIssuancePdfDocumentDetail"
import DocumentIssuanceElectronicSignatureManager from "./components/listers/DocumentIssuanceElectronicSignatureCards"
import DocumentIssuanceElectronicSignatureDetail from "./components/listers/DocumentIssuanceElectronicSignatureDetail"

import PdfDocumentViewView from "./components/PdfDocumentViewView"
import PdfDocumentViewViewDetail from "./components/PdfDocumentViewViewDetail"
import SignatureStatusView from "./components/SignatureStatusView"
import SignatureStatusViewDetail from "./components/SignatureStatusViewDetail"

export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
            {
                path: '/applicationProcessings/applications',
                name: 'ApplicationProcessingApplicationManager',
                component: ApplicationProcessingApplicationManager
            },
            {
                path: '/applicationProcessings/applications/:id',
                name: 'ApplicationProcessingApplicationDetail',
                component: ApplicationProcessingApplicationDetail
            },

            {
                path: '/applicationProcessings/applicationSummaries',
                name: 'ApplicationSummaryView',
                component: ApplicationSummaryView
            },
            {
                path: '/applicationProcessings/applicationSummaries/:id',
                name: 'ApplicationSummaryViewDetail',
                component: ApplicationSummaryViewDetail
            },
            {
                path: '/applicationProcessings/applicationDetails',
                name: 'ApplicationDetailsView',
                component: ApplicationDetailsView
            },
            {
                path: '/applicationProcessings/applicationDetails/:id',
                name: 'ApplicationDetailsViewDetail',
                component: ApplicationDetailsViewDetail
            },
            {
                path: '/dataCollections/dataCollectors',
                name: 'DataCollectionDataCollectorManager',
                component: DataCollectionDataCollectorManager
            },
            {
                path: '/dataCollections/dataCollectors/:id',
                name: 'DataCollectionDataCollectorDetail',
                component: DataCollectionDataCollectorDetail
            },

            {
                path: '/dataCollections/dataCollectionTaskSummaries',
                name: 'DataCollectionTaskSummaryView',
                component: DataCollectionTaskSummaryView
            },
            {
                path: '/dataCollections/dataCollectionTaskSummaries/:id',
                name: 'DataCollectionTaskSummaryViewDetail',
                component: DataCollectionTaskSummaryViewDetail
            },
            {
                path: '/dataCollections/dataCollectionTaskDetails',
                name: 'DataCollectionTaskDetailsView',
                component: DataCollectionTaskDetailsView
            },
            {
                path: '/dataCollections/dataCollectionTaskDetails/:id',
                name: 'DataCollectionTaskDetailsViewDetail',
                component: DataCollectionTaskDetailsViewDetail
            },
            {
                path: '/dataCollections/dataCollectionLogs',
                name: 'DataCollectionLogView',
                component: DataCollectionLogView
            },
            {
                path: '/dataCollections/dataCollectionLogs/:id',
                name: 'DataCollectionLogViewDetail',
                component: DataCollectionLogViewDetail
            },
            {
                path: '/documentIssuances/pdfDocuments',
                name: 'DocumentIssuancePdfDocumentManager',
                component: DocumentIssuancePdfDocumentManager
            },
            {
                path: '/documentIssuances/pdfDocuments/:id',
                name: 'DocumentIssuancePdfDocumentDetail',
                component: DocumentIssuancePdfDocumentDetail
            },
            {
                path: '/documentIssuances/electronicSignatures',
                name: 'DocumentIssuanceElectronicSignatureManager',
                component: DocumentIssuanceElectronicSignatureManager
            },
            {
                path: '/documentIssuances/electronicSignatures/:id',
                name: 'DocumentIssuanceElectronicSignatureDetail',
                component: DocumentIssuanceElectronicSignatureDetail
            },

            {
                path: '/documentIssuances/pdfDocumentViews',
                name: 'PdfDocumentViewView',
                component: PdfDocumentViewView
            },
            {
                path: '/documentIssuances/pdfDocumentViews/:id',
                name: 'PdfDocumentViewViewDetail',
                component: PdfDocumentViewViewDetail
            },
            {
                path: '/documentIssuances/signatureStatuses',
                name: 'SignatureStatusView',
                component: SignatureStatusView
            },
            {
                path: '/documentIssuances/signatureStatuses/:id',
                name: 'SignatureStatusViewDetail',
                component: SignatureStatusViewDetail
            },


    ]
})
