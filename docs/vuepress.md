# VuePress

## Markdown Plugins

### FontAwesome

[Plugin Repo](https://github.com/nunof07/markdown-it-fontawesome)

#### Example:

Hello World! :fas-flag:

- [:fab-google: Google](https://www.google.com/)
- [:fab-github: GitHub](https://github.com/)

### Mermaid

[Mermaid.js](https://mermaidjs.github.io/)

<mermaid />

```mermaid
graph TD
  subgraph
    event1["USER_SUSPENDED"]
    event1 --> keycloak1("Blocage du compte")
  end
  subgraph
    event2["USER_SUSPENDED"]
    event2 --> workplace1("Blocage du compte")
  end

  style keycloak1 fill:#ffb6c1
  style workplace1 fill:#e6e6fa
  style event1 fill:#c1cdc1,stroke:#333,stroke-width:2px,stroke-dasharray: 10
  style event2 fill:#c1cdc1,stroke:#333,stroke-width:2px,stroke-dasharray: 10
```

```mermaid
graph TD;
A-->B;
A-->C;
B-->D;
C-->D;
```

```mermaid
graph TD
    Start --> Stop
```