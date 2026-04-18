use crate::models::DnsInstructions;

pub fn generate_dns_instructions(domain: &str) -> DnsInstructions {
    DnsInstructions {
        domain: domain.to_string(),
        mx_records: vec![
            format!("@ 300 IN MX 10 mail.{}", domain),
            format!("@ 300 IN MX 20 mail2.{}", domain),
        ],
        spf_record: "v=spf1 mx ~all".to_string(),
        dkim_record: "default._domainkey  IN  TXT  v=DKIM1; k=rsa; p=YOUR_DKIM_PUBLIC_KEY".to_string(),
        dmarc_record: format!("_dmarc.{}  IN  TXT  v=DMARC1; p=quarantine; rua=mailto:dmarc@{}", domain, domain),
        autodiscover: format!("autodiscover.{}  IN  CNAME  mail.{}", domain, domain),
    }
}
