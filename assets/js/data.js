/*
 * All the content that changes over time lives in this file.
 * To add a paper or a student, copy an entry, edit it, save. No build step.
 *
 * Publication fields
 *   y      year
 *   t      title
 *   a      authors, as they should appear
 *   v      venue (short)
 *   k      kind: "journal" | "conference" | "preprint"
 *   topic  one of the keys in TOPICS below
 *   doi    DOI or full URL to the paper
 *   pdf    optional path or URL to a pre-print
 *   dorsal true if the work is part of the DORSAL lab project
 */

const TOPICS = {
  perf:   { label: "Performance & tracing" },
  ai:     { label: "LLMs for software engineering" },
  ml:     { label: "Engineering ML systems" },
  review: { label: "Code review & CI" },
  api:    { label: "API evolution" },
};

const PUBLICATIONS = [
  // ---- 2026
  { y: 2026, t: "Differentiating refactoring practices: a comparative analysis of ML and non-ML frameworks",
    a: "Timilehin Ogundare, Maxime Lamothe", v: "Empirical Software Engineering (EMSE)", k: "journal", topic: "ml",
    doi: "10.1007/s10664-026-10982-5" },
  { y: 2026, t: "Discovering Performance Archetypes: Critical-Path-Aware Pattern Analysis and Regression Detection",
    a: "Kaveh Shahedi, Heng Li, Maxime Lamothe, Foutse Khomh", v: "ASE 2026", k: "conference", topic: "perf", dorsal: true,
    doi: "10.1145/3832783.3834426" },
  { y: 2026, t: "Baseliner: A Plugin-Oriented, Hardware-Agnostic GPU Benchmarking Library",
    a: "Côme Eyraud, Maxime Lamothe", v: "ASE 2026", k: "conference", topic: "perf", dorsal: true,
    doi: "10.1145/3832783.3834645" },
  { y: 2026, t: "MallocSan: A Memory Safety Tool for Native Closed-Source Applications",
    a: "Adel Belkhiri, Michel Dagenais, Maxime Lamothe", v: "arXiv", k: "preprint", topic: "perf", dorsal: true,
    doi: "https://arxiv.org/abs/2609.38499" },
  { y: 2026, t: "An empirical study on method-level performance evolution in open-source Java projects",
    a: "Kaveh Shahedi, Nana Gyambrah, Heng Li, Maxime Lamothe, Foutse Khomh", v: "Empirical Software Engineering (EMSE)", k: "journal", topic: "perf",
    doi: "10.1007/s10664-026-10936-x" },
  { y: 2026, t: "DTraComp: Comparing distributed execution traces for understanding intermittent latency sources",
    a: "Maryam Ekhlasi, Fateme Faraji Daneshgar, Michel Dagenais, Maxime Lamothe, Naser Ezzati-Jivan, Matthew Khouzam", v: "Journal of Systems and Software (JSS)", k: "journal", topic: "perf", dorsal: true,
    doi: "10.1016/j.jss.2026.112990" },
  { y: 2026, t: "SQLMorph: Query Mutation and Fine-Grained Metrics for Text-to-SQL Evaluation",
    a: "Mohammadhossein Malekpour, Mohamed Riahi, Maxime Lamothe, Amine Mhedhbi", v: "ICDE 2026", k: "conference", topic: "ai",
    doi: "10.1109/icde65706.2026.00196" },
  { y: 2026, t: "RefAgent: A Multi-agent LLM-based Framework for Automatic Software Refactoring",
    a: "Khouloud Oueslati, Maxime Lamothe, Foutse Khomh", v: "ICSE 2026", k: "conference", topic: "ai",
    doi: "10.1145/3744916.3773153" },

  // ---- 2025
  { y: 2025, t: "From Technical Excellence to Practical Adoption: Lessons Learned Building an ML-Enhanced Trace Analysis Tool",
    a: "Kaveh Shahedi, Matthew Khouzam, Heng Li, Maxime Lamothe, Foutse Khomh", v: "ASE 2025", k: "conference", topic: "perf", dorsal: true,
    doi: "10.1109/ase63991.2025.00286" },
  { y: 2025, t: "Interrogative Comments Posed by Review Comment Generators: An Empirical Study of Gerrit",
    a: "Farshad Kazemi, Maxime Lamothe, Shane McIntosh", v: "ESEM 2025", k: "conference", topic: "review",
    doi: "10.1109/esem64174.2025.00054" },
  { y: 2025, t: "HybridRCA: Lightweight Critical-Path-Aware Hybrid Tracing for Root-Cause Analysis in Production Microservices",
    a: "Maryam Ekhlasi, Arnaud Fiorini, Michel Dagenais, Naser Ezzati-Jivan, Maxime Lamothe", v: "ICSME 2025", k: "conference", topic: "perf", dorsal: true,
    doi: "10.1109/icsme64153.2025.00056" },
  { y: 2025, t: "Tracing Optimization for Performance Modeling and Regression Detection",
    a: "Kaveh Shahedi, Heng Li, Maxime Lamothe, Foutse Khomh", v: "ACM Transactions on Software Engineering and Methodology (TOSEM)", k: "journal", topic: "perf", dorsal: true,
    doi: "10.1145/3749839" },
  { y: 2025, t: "JPerfEvo: A Tool for Tracking Method-Level Performance Changes in Java Projects",
    a: "Kaveh Shahedi, Maxime Lamothe, Foutse Khomh, Heng Li", v: "MSR 2025", k: "conference", topic: "perf",
    doi: "10.1109/msr66628.2025.00125" },
  { y: 2025, t: "InsightAI: Root Cause Analysis in Large Log Files with Private Data Using Large Language Model",
    a: "Maryam Ekhlasi, Anurag Prakash, Maxime Lamothe, Michel Dagenais", v: "CAIN 2025", k: "conference", topic: "ai", dorsal: true,
    doi: "10.1109/cain66642.2025.00012" },
  { y: 2025, t: "Automated, Unsupervised, and Auto-Parameterized Inference of Data Patterns and Anomaly Detection",
    a: "Qiaolin Qin, Heng Li, Ettore Merlo, Maxime Lamothe", v: "ICSE 2025", k: "conference", topic: "ml",
    doi: "10.1109/icse55347.2025.00078" },
  { y: 2025, t: "Empirical Deduction and Analysis of Bug Evolution in Deep Learning and Non-Deep Learning Frameworks",
    a: "Timilehin Ogundare, Maxime Lamothe", v: "SSRN", k: "preprint", topic: "ml",
    doi: "10.2139/ssrn.5139167" },

  // ---- 2024
  { y: 2024, t: "Mining Action Rules for Defect Reduction Planning",
    a: "Khouloud Oueslati, Gabriel Laberge, Maxime Lamothe, Foutse Khomh", v: "FSE 2024 (Proc. ACM Softw. Eng.)", k: "conference", topic: "ml",
    doi: "10.1145/3660809" },
  { y: 2024, t: "Characterizing the Prevalence, Distribution, and Duration of Stale Reviewer Recommendations",
    a: "Farshad Kazemi, Maxime Lamothe, Shane McIntosh", v: "IEEE Transactions on Software Engineering (TSE)", k: "journal", topic: "review",
    doi: "10.1109/tse.2024.3422369" },
  { y: 2024, t: "What causes exceptions in machine learning applications? Mining machine learning-related stack traces on Stack Overflow",
    a: "Amin Ghadesi, Maxime Lamothe, Heng Li", v: "Empirical Software Engineering (EMSE)", k: "journal", topic: "ml",
    doi: "10.1007/s10664-024-10499-9" },
  { y: 2024, t: "Re-Ranking Step by Step: Investigating Pre-Filtering for Re-Ranking with Large Language Models",
    a: "Baharan Nouriinanloo, Maxime Lamothe", v: "arXiv", k: "preprint", topic: "ai",
    doi: "https://arxiv.org/abs/2406.18740" },
  { y: 2024, t: "How Trustworthy Is Your Continuous Integration (CI) Accelerator? A Comparison of the Trustworthiness of CI Acceleration Products",
    a: "Zhili Zeng, Tao Xiao, Maxime Lamothe, Hideaki Hata, Shane McIntosh", v: "IEEE Software", k: "journal", topic: "review",
    doi: "10.1109/ms.2024.3395616" },
  { y: 2024, t: "A Mutation-Guided Assessment of Acceleration Approaches for Continuous Integration: An Empirical Study of YourBase",
    a: "Zhili Zeng, Tao Xiao, Maxime Lamothe, Hideaki Hata, Shane McIntosh", v: "MSR 2024", k: "conference", topic: "review",
    doi: "10.1145/3643991.3644914" },
  { y: 2024, t: "Communicating Study Design Trade-offs in Software Engineering",
    a: "Martin P. Robillard, Deeksha M. Arya, Neil Ernst, Jin Guo, Maxime Lamothe, Mathieu Nassif, Nicole Novielli, Alexander Serebrenik, Igor Steinmacher, Klaas-Jan Stol", v: "ACM Transactions on Software Engineering and Methodology (TOSEM)", k: "journal", topic: "review",
    doi: "10.1145/3649598" },

  // ---- 2023
  { y: 2023, t: "Assessing the exposure of software changes: The DiPiDi approach",
    a: "Mehran Meidani, Maxime Lamothe, Shane McIntosh", v: "Empirical Software Engineering (EMSE)", k: "journal", topic: "review",
    doi: "10.1007/s10664-022-10270-y", pdf: "https://arxiv.org/abs/2104.00725" },

  // ---- 2022
  { y: 2022, t: "Exploring the Notion of Risk in Code Reviewer Recommendation",
    a: "Farshad Kazemi, Maxime Lamothe, Shane McIntosh", v: "ICSME 2022", k: "conference", topic: "review",
    doi: "10.1109/icsme55016.2022.00021", pdf: "./assets/papers/kazemi_icsme_2022.pdf" },
  { y: 2022, t: "Lessons from Eight Years of Operational Data from a Continuous Integration Service: An Exploratory Case Study of CircleCI",
    a: "Keheliya Gallaba, Maxime Lamothe, Shane McIntosh", v: "ICSE 2022", k: "conference", topic: "review",
    doi: "10.1145/3510003.3510211", pdf: "./assets/papers/kgallaba_icse_2022.pdf" },
  { y: 2022, t: "How Does Code Reviewing Feedback Evolve? A Longitudinal Study at Dell EMC",
    a: "Ruiyin Wen, Maxime Lamothe, Shane McIntosh", v: "ICSE-SEIP 2022", k: "conference", topic: "review",
    doi: "10.1145/3510457.3513039", pdf: "./assets/papers/rwen_icse_2022.pdf" },
  { y: 2022, t: "Studying logging practice in test code",
    a: "Haonan Zhang, Yiming Tang, Maxime Lamothe, Heng Li, Weiyi Shang", v: "Empirical Software Engineering (EMSE)", k: "journal", topic: "perf",
    doi: "10.1007/s10664-022-10139-0", pdf: "https://users.encs.concordia.ca/~shang/pubs/EMSE_Haonan_2022.pdf" },

  // ---- 2021
  { y: 2021, t: "Is Historical Data an Appropriate Benchmark for Reviewer Recommendation Systems? A Case Study of the Gerrit Community",
    a: "Ian X. Gauthier, Maxime Lamothe, Gunter Mussbacher, Shane McIntosh", v: "ASE 2021", k: "conference", topic: "review",
    doi: "10.1109/ase51524.2021.9678640", pdf: "https://rebels.cs.uwaterloo.ca/papers/ase2021_gauthier.pdf" },
  { y: 2021, t: "A Systematic Review of API Evolution Literature",
    a: "Maxime Lamothe, Yann-Gaël Guéhéneuc, Weiyi Shang", v: "ACM Computing Surveys (CSUR)", k: "journal", topic: "api",
    doi: "10.1145/3470133", pdf: "./assets/papers/mlamothe_csur_2021.pdf" },
  { y: 2021, t: "Evaluating the impact of falsely detected performance bug-inducing changes in JIT models",
    a: "Sophia Quach, Maxime Lamothe, Bram Adams, Yasutaka Kamei, Weiyi Shang", v: "Empirical Software Engineering (EMSE)", k: "journal", topic: "perf",
    doi: "10.1007/s10664-021-10004-6", pdf: "https://users.encs.concordia.ca/~shang/pubs/Quach2021_Article_EvaluatingTheImpactOfFalselyDe.pdf" },
  { y: 2021, t: "Assisting Example-Based API Misuse Detection via Complementary Artificial Examples",
    a: "Maxime Lamothe, Heng Li, Weiyi Shang", v: "IEEE Transactions on Software Engineering (TSE)", k: "journal", topic: "api",
    doi: "10.1109/tse.2021.3093246", pdf: "https://users.encs.concordia.ca/home/s/shang/pubs/Max_TSE_2021.pdf" },
  { y: 2021, t: "An empirical study on the use of SZZ for identifying inducing changes of non-functional bugs",
    a: "Sophia Quach, Maxime Lamothe, Yasutaka Kamei, Weiyi Shang", v: "Empirical Software Engineering (EMSE)", k: "journal", topic: "perf",
    doi: "10.1007/s10664-021-09970-8", pdf: "https://users.encs.concordia.ca/home/s/shang/pubs/Quach2021_Article_AnEmpiricalStudyOnTheUseOfSZZF.pdf" },

  // ---- 2020
  { y: 2020, t: "When APIs are Intentionally Bypassed: An Exploratory Study of API Workarounds",
    a: "Maxime Lamothe, Weiyi Shang", v: "ICSE 2020", k: "conference", topic: "api",
    doi: "10.1145/3377811.3380433", pdf: "./assets/papers/mlamothe_icse_2020.pdf" },
  { y: 2020, t: "Bridging the Divide Between API Users and API Developers by Mining Public Code Repositories",
    a: "Maxime Lamothe", v: "ICSE 2020 Doctoral Symposium", k: "conference", topic: "api",
    doi: "10.1145/3377812.3382124", pdf: "./assets/papers/mlamothe_icseDS_2020.pdf" },
  { y: 2020, t: "A3: Assisting Android API Migrations Using Code Examples",
    a: "Maxime Lamothe, Weiyi Shang, Tse-Hsun (Peter) Chen", v: "IEEE Transactions on Software Engineering (TSE)", k: "journal", topic: "api",
    doi: "10.1109/tse.2020.2988396", pdf: "./assets/papers/mlamothe_tse_2020.pdf" },

  // ---- 2018
  { y: 2018, t: "Exploring the Use of Automated API Migrating Techniques in Practice: An Experience Report on Android",
    a: "Maxime Lamothe, Weiyi Shang", v: "MSR 2018", k: "conference", topic: "api",
    doi: "10.1145/3196398.3196420", pdf: "https://users.encs.concordia.ca/~shang/pubs/MSR2018_MAX.pdf" },
];

/*
 * People fields
 *   name   full name
 *   role   "Ph.D. student", "M.Sc. student", ...
 *   topic  optional, one line on what they work on
 *   with   optional co-supervisor(s)
 *   url    optional personal page
 *   photo  optional path to a square photo (e.g. "./assets/img/people/name.jpg");
 *          initials are shown when there is none
 *   lab    optional, "DORSAL" adds the lab badge
 *
 * TODO(Maxime): the "current" list was inferred from co-authorships and the
 * DORSAL team page. Please confirm names, degrees and co-supervisors.
 */
const STUDENTS = [
  { name: "Anas Bouziane", role: "Ph.D. student",
    topic: "Democratizing AI for software engineering" },
  { name: "Saman Shaheen", role: "Ph.D. student",
    topic: "Software maintenance for agentic software engineering" },
  { name: "Khouloud Oueslati", role: "Ph.D. student",
    topic: "LLM agents for automated refactoring and defect reduction planning",
    with: "Foutse Khomh" },
  { name: "Timilehin Ogundare", role: "Graduate student",
    topic: "How ML frameworks are refactored and how their bugs evolve" },
  { name: "Côme Eyraud", role: "M.Sc. student", lab: "DORSAL",
    topic: "Hardware-agnostic GPU benchmarking (Baseliner)" },
];

const ALUMNI = [
  { name: "Kaveh Shahedi", role: "Ph.D.", lab: "DORSAL", // TODO(Maxime): graduation year
    topic: "Trace optimization, performance modelling and regression detection",
    with: "Heng Li and Foutse Khomh" },
  { name: "Sébastien Darche", role: "Ph.D. 2025", lab: "DORSAL",
    topic: "Profiling and Tracing Tools for General-Purpose Computing on Graphics Processing Units (GPGPU)" },
  { name: "Maryam Ekhlasi", role: "Ph.D. 2025", lab: "DORSAL",
    topic: "Automated performance diagnosis in distributed systems using traces, system metrics and large language models" },
  { name: "Baharan Nouriinanloo", role: "M.Sc. 2024",
    topic: "Improving Information Retrieval and Recommender Systems with Contextual Data and Re-Ranking" },
  { name: "Amin Ghadesi", role: "M.Sc. 2023",
    topic: "An Empirical Study of the Causes and Symptoms of Machine Learning Exceptions" },
  { name: "Nana Gyambrah", role: "M.Sc.", // TODO(Maxime): graduation year
    topic: "Method-level performance evolution in open-source Java projects" },
  { name: "Anas Bouziane", role: "M.Sc. 2023 · now a Ph.D. student in the group",
    topic: "On-Demand Health Data Provisioning with Custom Temporary Data Views for Big Data Platforms" },
];
