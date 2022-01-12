# cicd-service
Cloud Build Demo using Docker and GKE
Code location: https://github.com/ajaynaphade969/cicd-service

Resources used in this demo:
Code in github:
1.	Dockerfile to build the sample image
2.	cloudbuild.yaml to build+push the image to gcr and apply to GKE demo cluster in our project (gcp-ngt-training) 
3.	server.js which is used in the Dockerfile to display the page in browser after deployment in a container

GKE resources:
1.	Cluster: cloudbuild-demo-cluster
2.	Workload: hello-cloudbuild-demo-app
3.	Service: hello-cloudbuild-demo-app-service

GCR image location: 
gcr.io/gcp-ngt-training/hello-cloudbuild-demo-app 

Cloud Build Trigger:
https://console.cloud.google.com/cloud-build/triggers/edit/a8a3b880-4c57-4ab1-a9f1-416849a2f449?project=gcp-ngt-training
This trigger is integrated with the github repo. Repository event that invokes this trigger is: Push to a branch
Configuration type is Cloud Build configuration file (YAML or JSON)
