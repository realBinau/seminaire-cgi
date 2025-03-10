

# Maj .firebaserc
adapter .firebaserc
```
{
  "projects": {
    "default": "seminaire-cgi-test-3"
  }
}
```

Switch sur le nouveau projet
``` bash
firebase use seminaire-cgi-test-3
```


Deploy
``` bash
firebase deploy
```

# Parametre de stockage
 -> limiter l'historique



## Fonctions

Deploy des fonctions
``` bash
firebase deploy --only functions
```
