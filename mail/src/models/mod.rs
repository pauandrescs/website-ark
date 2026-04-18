pub mod company;
pub mod mail_domain;
pub mod mailbox;

pub use company::{Company, CreateCompanyRequest, UpdateCompanyRequest, CompanyResponse};
pub use mail_domain::{MailDomain, CreateMailDomainRequest, MailDomainResponse, DnsInstructions};
pub use mailbox::{Mailbox, CreateMailboxRequest, UpdateMailboxRequest, MailboxResponse, CreateMailboxResponse};
