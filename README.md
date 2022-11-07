# City Chain Registry

The City Chain Registry is a registry of entities.

Think of the City Chain Registry as a form for smart yellow pages, where entities can register and announce changes and updates related to their entities.

This service is made available to be an alternative to centralized and national registries. It is borderless and permissionless.

Registrations in this registry does not result in any legal registration in the entity country of residence. It is your responsibility to follow local and regional laws and regulations.

The City Chain Registry CC is a crypto company registered in this registry. The crypto company has no physical locality or regionality, and is not registered in any national registry.

## Description

Work-in-progress:

One of the most important decisions to be made on implementation details for the registry of entities, is whether each entity should require to be its own DID Subject, or simply an Verifiable Credential (VC).

The DID Document for the entity could be from any supported DID Method, and it could be the authority for which keys are allowed to perform updated to the entity in the registration.

The other alternative is to simply make the entity an Verifiable Credential, where it lists different DID Subjects ("people") with different roles in the organization, like "CEO" and "CFO".

### Storage

Updates to the entities goes through the Registry APIs. These APIs will verify the permissions and schema, and if approved (pre-approval or manual verification for new entities), data is stored in a Decentralized Web Node that is hosted by the registry.

The DWN itself can and should be decentralized and open for anyone to synchronize all the data within it.

### Process

Anyone who want to register an entity, first visit the City Chain Registry website. From here, they choose to create a new registration.

First step is to create a new DID (it is possible to reuse a personal DID, but highly adviced to have a unique DID Subject for the entity). The web app will guide the user through this process.

First step is to ensure that user have a Web5 enabled wallet installed. If they have this wallet, they can create an DID directly in the wallet.

The website will then initiate an selection popup where user must pick the DID they want to register the entity with.

The next step is to fill out the registration form. This is the entity registration form that collects relevant and needed information for a sensible listing in the registry.

After information has been filled out, the web app will ask the user to sign a message with all the supplied information. This is done through a popup in the Web5 Wallet.

The final step is to perform payment for the registration. The entity behind the City Chain Registry is responsible for hosting data, maintaining the services and curating the content to be correct and relevant. These services that is provided is paid for by the entities that requests listing in the registry.

After payment is verified, the listing is approved or rejected by the City Chain Registry CC. If the application is rejected, the majority of the payment is refunded, but the company keeps some of the registration fee. Rejections can be done for reasons such as duplicate registrations, fake entities, attempts at phishing, and other reasons.

### Verification

At any time anyone need to verify an entity, they can do so through the City Chain Registry website. While the data provided by the registry can be trusted, you can also verify yourself that the information is cryptographically signed correctly by the controlling keys of the entity.

