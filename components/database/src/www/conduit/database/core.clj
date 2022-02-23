(ns www.conduit.database.core
  (:require [next.jdbc :as jdbc]
            [next.jdbc.connection :as njc])
  (:import (com.zaxxer.hikari HikariDataSource)))


;;
(def postgres-db {:dbtype   "postgres"
                  :dbname   "conduit_dev"
                  :host     "localhost"
                  :port     5432})
                  ; :user     "vishalgautam"})
                  ; :password "password"})

(comment
  (jdbc/get-connection postgres-db))
