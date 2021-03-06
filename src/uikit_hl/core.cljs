(ns uikit-hl.core
  (:require ["uikit" :as uk]
            [javelin.core :as j]
            [hoplon.core :as h]
            [hoplon.jquery]))

(def uikit uk)

(defn modal [elem & [opts]]
  (.modal uikit elem opts))

(defn slider [elem & [opts]]
  (.slider uikit elem opts))
